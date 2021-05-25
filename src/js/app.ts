import { createStore } from './stores/store.js';

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
            'navigation--main': () => import(/* webpackChunkName: "navigation--main" */ '@/vue/organisms/navigations/navigation--main.vue'),
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
            }

        },

        mounted() {
            window.addEventListener('load', () => {
                Prism.highlightAll();
            })

            // Numeric handbook header logic
            const activeItem = document.querySelector('.handbook-active');
            const entryTitle =  document.querySelector('.header-section-title');

            if  (activeItem) {

                const activeItemAttr = activeItem.getAttribute('data-active-index');
                
                const span = document.createElement('span');
                span.textContent = activeItemAttr;

                entryTitle.prepend(span);    

                const heading = document.querySelector('.handbook').getElementsByTagName('h3');

                const arr = [].slice.call(heading);

                arr.forEach( (element) => {
                    element.innerHTML = activeItemAttr + '.' + element.getAttribute('data-sub-index') + ' ' + element.getAttribute('data-title');
                });
                
            }
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