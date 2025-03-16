<template>
  <div id="app">
    <NavBar :isNavOpen="isNavOpen" @toggle-nav="toggleNav" />
    <router-view></router-view>
    <BotPane />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import BotPane from './components/BotPane.vue';

const isNavOpen = ref(localStorage.getItem('isNavOpen') === 'true');

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
  localStorage.setItem('isNavOpen', String(isNavOpen.value));
};
</script>
