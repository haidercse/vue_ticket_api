import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import store from './stores'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')