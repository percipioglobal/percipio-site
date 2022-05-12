import App from '@/vue/App.vue'
import { createApp } from 'vue'
import './assets/icons.js'

// Import our CSS
import '@/css/app.css';

// App main
const main = async () => {

    const app = createApp(App)

    // Mount the app
    return app.mount('#page-container')
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