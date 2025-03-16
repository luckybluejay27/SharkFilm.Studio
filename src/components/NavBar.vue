<template>
  <header class="nav-container" :class="{ 'nav-expanded': isNavOpen }">
    <button class="hamburger" @click="$emit('toggle-nav')" aria-label="Toggle navigation">
      ☰
    </button>
    <nav :class="{ 'nav-open': isNavOpen }">
      <ul class="nav-list" v-if="isNavOpen">
        <li v-for="route in routes" :key="route.path" class="nav-item">
          <router-link class="nav-link" :to="route.path">
            {{ route.name || 'Unnamed Route' }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const { isNavOpen } = defineProps({
  isNavOpen: Boolean,
});

const router = useRouter();
// Create a reactive ref for routes
const routes = ref(router.getRoutes().filter(route => route.name && route.name !== 'unknown'));

const updateRoutes = () => {
  routes.value = router.getRoutes().filter(route => route.name && route.name !== 'unknown');
};

onMounted(() => {
  updateRoutes();
  const interval = setInterval(updateRoutes, 500);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>
