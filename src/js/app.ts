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
    faInstagram as fabInstagram,
    faLinkedinIn as fabLinkedinIn,
    faYoutube as fabYoutube,
    faVimeoV as fabVimeoV,
    faGithub as fabGithub,
} from '@fortawesome/free-brands-svg-icons';

// load font-awesome libraries
library.add(farFilePdf, farFileExcel, farFileWord, farFilePowerPoint, farFileArchive, fasCloudDownloadAlt, fasExternalLinkAlt, fabTwitter, fabFacebookF, farEnvelope, fasPrint, fabInstagram, fabYoutube, fabVimeoV, fabGithub, fabLinkedinIn);

// App main
const site = async () => {
    // Async load the vue module
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');

    const vm = new Vue({

        el: '#page-header',
        data: () => ({
            navOpen: false,
        }),
        methods: {

            // Pre-render pages when the user mouses over a link
            // Usage: <a href="" @mouseover="prerenderLink">
            prerenderLink: function (e : Event) {
                const head = document.getElementsByTagName("head")[0];
                const refs = head.childNodes;
                const ref = refs[refs.length - 1];

                const elements = head.getElementsByTagName("link");
                Array.prototype.forEach.call(elements, function (el, i) {
                    if (("rel" in el) && (el.rel === "prerender")) {
                        el.parentNode.removeChild(el);
                    }
                });

                if (ref.parentNode && e.currentTarget) {
                    const target : HTMLAnchorElement = <HTMLAnchorElement>e.currentTarget;
                    const prerenderTag = document.createElement("link");
                    prerenderTag.rel = "prerender";
                    prerenderTag.href = target.href;
                    ref.parentNode.insertBefore(prerenderTag, ref);
                }
            },

            toggleMenu(){
                this.navOpen = !this.navOpen;
            },

            scroll(id){
                document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
                });
            },

            printPage: function () {
                window.print();
            }

        },

    })
};

// Execute async function
site().then( (value) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
