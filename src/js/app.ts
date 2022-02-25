import { createStore } from './stores/store.js';
import { createLevels } from './functions/handbook';

// App main
const site = async () => {
    // Async load the vue module
    const [ Vue, Prism ] = await Promise.all([
        import(/* webpackChunkName: "vue" */ 'vue'),
        import(/* webpackChunkName: "prism" */ 'prismjs'),
    ]).then(arr => arr.map(({ default: defaults }) => defaults));

    const store = await createStore(Vue);

    const vm = new Vue({

        el: '#page-container',
        store,
        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '@/vue/atoms/buttons/button--hamburger.vue'),
            'navigation--drawer': () => import(/* webpackChunkName: "navigation--drawer" */ '@/vue/organisms/navigations/navigation--drawer.vue'),
            'navigation--item': () => import(/* webpackChunkName: "navigation--item" */ '@/vue/atoms/navigations/navigation--item.vue'),
            'notification--cookie': () => import(/* webpackChunkName: "notification--cookie" */ '@/vue/molecules/notifications/notification--cookie.vue'),
        },

        data: () => ({}),

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

            printPage() {
                window.print();
            },

            handleScroll(){
                const currentScrollPos = window.pageYOffset;
                const topNav = document.getElementById('top-nav');

                if (currentScrollPos > 0) {
                    topNav.classList.add('shadow-xl');
                } else {
                    topNav.classList.remove('shadow-xl');
                }
            }

        },

        created () {
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        mounted() {
            window.addEventListener('load', () => {
                Prism.highlightAll();
            })
            
            createLevels('.handbook-active', 'data-active-index');
        }

    })
};

// Execute async function
site().then( (value) => {
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}