
import App from '@/vue/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Lottie from 'vue3-lottie'
import './assets/icons'

// Import our CSS
import '@/css/app.pcss';

// App main
const main = async () => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    const app = createApp(App)
    return app.use(pinia).use(Vue3Lottie).mount('#page-container')
}

// Execute async function
main().then( () => {
    console.log()
})

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR active')
    });
}