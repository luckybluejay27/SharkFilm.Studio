<template>
  <div class="page">
    <div class="comms-panel">
      <div class="comms-grid">

        <!-- SlideShow -->
        <div class="slideshow-container">
          <button @click="prevImage" class="nav-button left">◀</button>
          <div class="slideshow">
            <transition name="fade">
              <img
                v-if="images[currentIndex]"
                :src="images[currentIndex].src"
                :alt="images[currentIndex].label"
                class="slideshow-image"
                :key="currentIndex"
              />
            </transition>
            <p class="image-label">{{ images[currentIndex].label }}</p>
          </div>
          <button @click="nextImage" class="nav-button right">▶</button>
        </div>

        <!-- Pricing Cards -->
        <div class="pricing-cards placeholder">
          Pricing Cards - Top Right
        </div>

        <!-- Terms and Conditions -->
        <div class="tos-consider placeholder">
          Terms and Conditions - Bottom Right
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: "Commissions"
});

const imageLookup: Record<string, string> = {
  "SharkWip": "Work in Progress"
};

const modules = import.meta.glob('@/assets/CommsAssets/*.{png,jpg,jpeg,svg}', { eager: true });

const rawImages = Object.entries(modules).map(([path, mod]) => {
  const filename = path.split('/').pop()?.split('.')[0] || 'Untitled';
  return {
    src: (mod as any).default,
    filename,
    label: imageLookup[filename] || filename.replace(/[-_]/g, ' ')
  };
});

const images = ref([...rawImages]);
const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<style scoped>
.comms-panel {
  height: 85vh;
  width: 85vw;
  transform: translateX(-20vw);
}

.comms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--size-component-padding);
  width: 100%;
  height: 100%;
}

.slideshow-container {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border: 2px solid black;
  border-radius: var(--size-border-radius);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.slideshow {
  display: flex;
  flex-direction: column;
  gap: var(--size-component-padding);
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.slideshow-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.image-label {
  margin-top: 0.5rem;
  color: var(--color-text);
}

.nav-button {
  background-color: var(--color-surface);
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.left {
  left: 0.5rem;
}

.right {
  right: 0.5rem;
}

.placeholder {
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  background-color: var(--color-surface);
  border-radius: var(--size-border-radius);
}

.pricing-cards {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.tos-consider {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

</style>
