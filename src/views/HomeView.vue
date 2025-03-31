<template>
  <div class="page">
    <div class="splash-wrapper">
      <img src="/src/assets/SharkSplashTitle.svg" class="SharkSplash" />
    </div>
    <div class="spacer" />

    <div class="HomeContainer">
      <div class="header1">Sharp Stories, Honest Depth</div>
      <h2> Recent Work Here</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</style>
