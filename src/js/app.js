// import our css
// eslint-disable-next-line unused-vars
import styles from '../css/app.pcss';
import icons from './assets/icons.js';

import { createStore } from './stores/store.js'

// App main
const main = async () => {
    // Async load the vue module
    const [ Vue, Lazysizes ] = await Promise.all([
        import(/* webpackChunkName: "vue" */ 'vue'),
        import(/* webpackChunkName: "lazysizes" */ 'lazysizes'),
    ])

    const store = await createStore(Vue.default);

    // Create our vue instance
    const vm = new Vue.default({
        el: "#page-container",
        store,
        data: () => ({
            hamburgerOpen: false
        }),
        components: {
            
        },
        methods: {
            toggleMenu(){
                this.hamburgerOpen = !this.hamburgerOpen;
            },
            scroll(elemID){
                document.getElementById(elemID).scrollIntoView({ 
                behavior: 'smooth' 
                });
            },
            printPage: function () {		
                window.print();
            }
        }
    });

    return vm;
};

// Execute async function
main().then( (vm) => {});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}