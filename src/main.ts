import './assets/scss/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VIcon', Icon)

app.use(createPinia())
app.use(router)

app.mount('#app')
