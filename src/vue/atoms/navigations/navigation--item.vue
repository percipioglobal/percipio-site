<template>
    <a
        :href="item.target[0].url"
        class="group block text-right capitalize text-4xl font-bold"
        :title="item.target[0].title"
        role="menuitem"
        tabindex="0"
        v-on:focus="openMenu"
        :aria-current="location.includes(item.target[0].url) ? 'page' : null"
    >
        <div class="py-2 px-4 relative overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 group-focus:text-white-100 transition duration-300 flex justify-end items-center">
                
                <svg 
                    :class="[
                        'w-4 h-4 mr-4',
                        location.includes(item.target[0].url) ? 'inline-block' : 'hidden'
                    ]" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px"
                    viewBox="0 0 500 577" 
                    style="enable-background:new 0 0 500 577;" 
                    xml:space="preserve"
                >
                    <g :class="[
                        'fill-current',
                        'text-' + swatch
                        ]">
                        <polygon points="0,322.9 310.5,144.2 250.3,109.5 95,199.1 0,144.3 250,0 500,144.2 189.6,322.9 
                        344.6,412.3 250,467.1 "/>
                    </g>
                    <g :class="[
                        'fill-current',
                        'text-' + swatch
                        ]">
                        <polygon points="250,467.1 344.6,412.3 189.6,322.9 500,144.2 500,432.8 250,577 	"/>
                        <polygon points="95,199.1 95,268.2 250.3,178.8 250.3,109.5 	"/>
                    </g>
                    <g :class="[
                        'fill-current',
                        'text-' + swatch
                        ]">
                        <polygon points="250.3,109.5 250.3,178.8 310.5,144.2"/>
                        <polygon points="0,322.9 250,467.1 250,577 0,432.8"/>
                        <polygon points="0,144.3 95,199.1 95,268.2 0,322.9"/>
                    </g>
                </svg>

                {{ item.target[0].title }}
            </span>
            <div :class="[
                'absolute top-0 ml-1 group-hover:ml-0 group-focus:ml-0 left-0 w-full h-full transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition duration-300 ease-blog',
                'bg-' + swatch,
            ]"></div>
        </div>
    </a>

</template>

<script>
    import { swatch } from '@/js/mixins/computed';
    
    export default {
        mixins: [ swatch ],
        props: {
            item: {
                type: Object,
                required: true,
            }
        },

        computed: {
            location()
            {
                return window.location.href;
            }
        },

        methods: {
            openMenu()
            {
                this.$store.commit('setNavigationActive', true);
                document.body.classList.toggle("overflow-hidden");
            }
        },
    }

</script>
