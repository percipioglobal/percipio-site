// import App from '@/vue/App.vue'
// import { createApp } from 'vue'
import './assets/icons'
import { init as initNavigation } from './animations/navigation'
// import { init as initPageAnimation } from './animations/page'
import { init as initCopy } from './utils/copy-to-clipboard'

// Import our CSS
import '@/css/app.pcss';

// App main
const main = async () => {

    initNavigation()
    initPageAnimation()
    initCopy()

    // const app = createApp(App)

    // // Mount the app
    // return app.mount('#page-container')
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
