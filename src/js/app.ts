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
                // Calculated number of level in navigation--handbook.twig
                const activeItemAttr = activeItem.getAttribute('data-active-index');
                
                // Create span element for calculated level number
                const span = document.createElement('span');
                // Change span element value to activeItemAttr value
                span.textContent = activeItemAttr;

                // Combine entry title with calculated level number
                entryTitle.prepend(span);

                const handbookElement = document.querySelector('.handbook').getElementsByTagName("*"); // Select all children elements of handbook
                const arrIndexes = [0, 0, 0, 0, 0]; // Create array for level indexes below activeItemAttr
                const lutHeadings = ['H2', 'H3', 'H4', 'H5', 'H6']; // Create lookup table for entry headings, instead of if statement
                let prevIndex = null; // Create starting value for previous heading

                // Convert HTML collection to array
                const arr = [].slice.call(handbookElement);

                arr.forEach((element) => {

                    // Check if nodename is heading
                    if (lutHeadings.includes(element.nodeName)) {
                       const elementLevel = parseInt(element.nodeName.substring(1)); // Converts string to number e.g: H2 -> 2
                       const arrLevel = elementLevel-2; // Get the right array index level e.g: H2 -> 2 = 0 position in arrIndexes
                       arrIndexes[arrLevel]++; // Get the right array index level value and increase by 1 e.g: [0, 0, 0, 0, 0] -> H2 = [1, 0, 0, 0, 0]

                        // Check if previous index is bigger than current index, and see if prevIndex exist
                        if (prevIndex > parseInt(elementLevel) && prevIndex) {

                            // Reset array level after active heading index
                            // eg: arrLevel = 0 (H2), prevIndex = 1 (H3) 
                            // [1, 1, 0, 0, 0] -> [2, 0, 0, 0, 0]
                            for(let i = arrLevel+1; i < arrIndexes.length; i++ ) {
                                arrIndexes[i] = 0;
                            }

                        }

                       prevIndex = elementLevel; // Sets current element level as previous for next element iteration

                       // aactiveItemAttr: prepend entry title level
                       // Filter: filter out indexes equal to 0, and convert array to string joint by dot,
                       // title: add element title after the levels
                       element.innerHTML = activeItemAttr + '.' + arrIndexes.filter(index => index > 0).join('.') + ' ' + element.innerHTML;
                    }

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