import './assets/GlobalDark.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
console.log('Registered Routes in main.ts:', router.getRoutes())

app.mount('#app')
