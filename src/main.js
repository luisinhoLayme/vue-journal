import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/style.css'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

// you are at video 10
