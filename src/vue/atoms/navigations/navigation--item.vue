<template>
    <div>
        <button 
            v-if="item.target[0].typeHandle == 'contactPage'" 
            class="group relative block text-right capitalize text-base font-bold border-2 border-blue-600 text-blue-600 transition duration-300"
        >
            <div class="py-3 px-4 absolute z-10 bg-white-100 w-full h-full group-hover:bg-blue-600 group-hover:opacity-10 group-focus:bg-blue-600 group-focus:opacity-20"></div>
            
            <span class="py-3 px-4 relative z-20 flex justify-end items-center">
                {{ item.target[0].title }}
            </span>   
        </button>

        <a
            v-else
            :href="item.target[0].url"
            class="block text-right capitalize text-base font-bold"
            :title="item.target[0].title"
            role="menuitem"
            tabindex="0"
            :aria-current="isCurrent ? 'page' : null"
        >
            <span class="py-3 relative z-10 hover:text-blue-800 focus:text-blue-800 transition duration-300 flex justify-end items-center">
                {{ item.target[0].title }}
            </span>
        </a>
    </div>
    

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
