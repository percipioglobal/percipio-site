// import our css
import '../css/app.pcss';

import { createStore } from './stores/store.js';
import { createLoadingState } from './utils/wait.js';

// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
    faFilePdf as farFilePdf,
    faFileExcel as farFileExcel,
    faFileWord as farFileWord,
    faFilePowerpoint as farFilePowerPoint,
    faFileArchive as farFileArchive,
    faEnvelope as farEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
    faCloudDownloadAlt as fasCloudDownloadAlt,
    faExternalLinkAlt as fasExternalLinkAlt,
    faPrint as fasPrint,
} from '@fortawesome/free-solid-svg-icons';

import {
    faTwitter as fabTwitter,
    faFacebookF as fabFacebookF,
} from '@fortawesome/free-brands-svg-icons';

// load font-awesome libraries
library.add(farFilePdf, farFileExcel, farFileWord, farFilePowerPoint, farFileArchive, fasCloudDownloadAlt, fasExternalLinkAlt, fabTwitter, fabFacebookF, farEnvelope, fasPrint);

// convert i tags to SVG
dom.watch({
    autoReplaceSvgRoot: document,
    observeMutationsRoot: document.body
});

// App main
const main = async () => {
    // Async load the vue module
    const { createApp, defineAsyncComponent } = await import(/* webpackChunkName: "vue" */ 'vue');

    // const store = await createStore(Vue.default);
    // const wait = await createLoadingState(Vue.default);

    // Create our vue instance
    const app = createApp({
        el: "#page-container",
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

    // Mount the app
    const root = app.mount("#page-container");

    return root;
};

// Execute async function
main().then( (root) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}