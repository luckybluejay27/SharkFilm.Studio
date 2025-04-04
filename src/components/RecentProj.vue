<template>
    <div class="carousel-container">
      <div class="carousel-track">
        <div v-for="image in images" :key="image.name" class="carousel-item">
          <img :src="image.src" :alt="image.name" />
          <p class="image-label">{{ image.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  defineOptions({
    name: "RecentProj"
  })
  
  const modules = import.meta.glob('@/assets/CarouselAssets/*.{png,jpg,jpeg,svg}', { eager: true })
  
  const images = ref(
    Object.entries(modules).map(([path, mod]) => ({
      src: (mod as any).default,
      name: path.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ') || 'Untitled'
    }))
  )
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    overflow-x: auto;
    padding: 2rem 0;
  }
  
  .carousel-track {
    display: flex;
    gap: 1.5rem;
    padding: 0 2rem;
    scroll-snap-type: x mandatory;
  }
  
  .carousel-item {
    flex: 0 0 auto;
    width: 200px;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .carousel-item img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .image-label {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: #ccc;
  }
  </style>
  