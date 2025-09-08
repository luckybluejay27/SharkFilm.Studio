<template>
  <header class="nav-container" :class="{ 'nav-expanded': isNavOpen }">
    <button class="hamburger" @click="$emit('toggle-nav')" aria-label="Toggle navigation">☰</button>

    <nav :class="{ 'nav-open': isNavOpen }">
      <ul class="nav-list" v-if="isNavOpen">
        <li v-for="route in routes" :key="route.name" class="nav-item">
          <RouterLink class="nav-link" :to="{ name: route.name as string }">
            {{ (route.meta?.title as string) ?? (route.name as string) }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { isNavOpen } = defineProps<{ isNavOpen: boolean }>()
const router = useRouter()

// Filter routes as needed
const routes = computed(() =>
  router.getRoutes().filter(r => r.meta?.showInNav)
)
</script>

