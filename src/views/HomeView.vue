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
.HomeContainer {
  height: 92vh;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
  padding-top: 2rem;
}

.header1 {
  font-size: clamp(2rem, 6vw, 3rem);
  text-align: center;
  width: 100%;
}

.splash-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-weight: 400;
}
</style>
