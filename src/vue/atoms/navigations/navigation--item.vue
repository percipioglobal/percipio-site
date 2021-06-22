<template>
    <a
        :href="item.target[0].url"
        class="group block text-right capitalize text-4xl font-bold"
        :title="item.target[0].title"
        role="menuitem"
        tabindex="0"
        v-on:focus="openMenu"
        :aria-current="isCurrent ? 'page' : null"
    >
        <div class="py-2 px-4 relative overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 group-focus:text-white-100 transition duration-300 flex justify-end items-center">
                
                <svg 
                    :class="[
                        'w-4 h-4 mr-4',
                        isCurrent ? 'inline-block' : 'hidden'
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
                        <polyline points="0,322.9 0,432.8 250,577 500,432.8 500,144.2 250,0 0,144.3 0,322.9"/>
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
            isCurrent()
            {
                if(this.item && this.item.includeChildren) {

                    return this.location().includes(this.item.target[0].url);

                }else{

                    return this.location() === this.item.target[0].url;

                }
            }
        },

        methods: {
            location()
            {
                return window.location.href;
            },
            openMenu()
            {
                this.$store.commit('setNavigationActive', true);
                document.body.classList.toggle("overflow-hidden");
            }
        },
    }

</script>
