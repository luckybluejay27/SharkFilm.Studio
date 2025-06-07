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
        <div class="pricing-cards">
          <ol>
            <li class="card">
              Sketch
              <hr class="price-divider" />
              <ul>
                <li><span class="label">Portrait</span><span class="price">$10</span></li>
                <li><span class="label">Half Body</span><span class="price">$20</span></li>
                <li><span class="label">Full Body</span><span class="price">$40</span></li>
              </ul>
            </li>
            <li class="card">
              Flat
              <hr class="price-divider" />
              <ul>
                <li><span class="label">Portrait</span><span class="price">$25</span></li>
                <li><span class="label">Half Body</span><span class="price">$50</span></li>
                <li><span class="label">Full Body</span><span class="price">$90</span></li>
              </ul>
            </li>
            <li class="card">
              CellShade
              <hr class="price-divider" />
              <ul>
                <li><span class="label">Portrait</span><span class="price">$30</span></li>
                <li><span class="label">Half Body</span><span class="price">$60</span></li>
                <li><span class="label">Full Body</span><span class="price">$110</span></li>
              </ul>
            </li>
          </ol>
        </div>
        <!-- Terms and Conditions -->
        <div class="tos-consider">
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

