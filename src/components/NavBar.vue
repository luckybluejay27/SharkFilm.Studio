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
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  isNavOpen: Boolean
});

const router = useRouter();
const routes = router.getRoutes().filter(route => route.name && route.name !== 'unknown');
</script>
