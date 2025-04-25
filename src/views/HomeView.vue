<template>
  <div class="page">
    <div class="splash-wrapper">
      <img src="/src/assets/SharkSplashTitle.svg" class="SharkSplash" />
      <h1 class="subtitle">Independant Animation</h1>
    </div>
    <div class="spacer" />

    <div class="HomeContainer">
      <div class="header1">Sharp Stories, Honest Depth</div>
      <RecentProj />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecentProj from '../components/RecentProj.vue';

defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
});
</script>

<style scoped>

</style>
