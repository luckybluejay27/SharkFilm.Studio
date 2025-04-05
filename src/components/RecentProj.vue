<template>
  <div class="carousel-container">
    <div class="carousel-track">
      <div v-for="image in images" :key="image.src" class="carousel-item">
        <img :src="image.src" :alt="image.label" />
        <p class="image-label">{{ image.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: "RecentProj"
})

const imageLookup: Record<string, string> = {
  "Carcinogen_Temp": "☣ Carcinogen",
  "Wind and Whiskey_Temp": "Wind & Whiskey"
}

const displayOrder = [
  "Carcinogen_Temp",
  "Wind And Whiskey_Temp",
  "Project Title",
  "Project Title 2: Electric Soon-Aloo",
  "Project Title 3: Working Title",
  "Now you Soon Me",
  "2 Soon 2 Cheap",
  "Soona or Later"
]

const modules = import.meta.glob('@/assets/CarouselAssets/*.{png,jpg,jpeg,svg}', { eager: true })

const rawImages = Object.entries(modules).map(([path, mod]) => {
  const filename = path.split('/').pop()?.split('.')[0] || 'Untitled'
  return {
    src: (mod as any).default,
    filename,
    label: imageLookup[filename] || filename.replace(/[-_]/g, ' ')
  }
})

const orderedImages = displayOrder.reduce((acc, filename) => {
  const match = rawImages.find(img => img.filename === filename)
  if (match) acc.push(match)
  return acc
}, [] as { src: string; filename: string; label: string }[])

const remainingImages = rawImages.filter(img => !displayOrder.includes(img.filename))

const images = ref([...orderedImages, ...remainingImages])
</script>

<style scoped>
.carousel-container {
  width: 90vw;
  overflow-x: auto;
  position: relative;
  padding-block: 2vh;
  padding-inline: 4vw;
  scroll-snap-type: x mandatory;
  display: block;
  background: linear-gradient(to bottom, rgba(255,255,255,0.01), rgba(255,255,255,0));
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.025);
  box-shadow: 0 0 0.25rem rgba(255,255,255,0.08);
}

.carousel-track {
  display: flex;
  width: max-content;
  gap: 1.5rem;
  padding-right: 6vw; /* add larger gap to imply end */
}

.carousel-item {
  flex: 0 0 auto;
  width: clamp(160px, 20vw, 240px);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  border-radius: 0.5rem;
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
