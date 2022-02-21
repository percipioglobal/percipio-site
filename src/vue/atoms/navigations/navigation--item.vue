<template>
    <div>
        <button 
            v-if="item.target[0].typeHandle == 'contactPage'"
            class="group relative mt-3 lg:mt-0 float-right lg:float-none block text-right capitalize text-4xl lg:text-base font-bold border-2 border-blue-600 text-blue-600 transition duration-300"
            role="menuitem"
            tabindex="0"
            :aria-current="isCurrent ? 'page' : null"
        >
            <a :href="item.target[0].url">
                <div class="py-3 px-4 absolute z-10 bg-white-100 w-full h-full group-hover:bg-blue-600 group-hover:opacity-10 group-focus:bg-blue-600 group-focus:opacity-20"></div>
                
                <span class="py-3 px-4 relative z-20 flex justify-end items-center">
                    {{ item.target[0].title }}
                </span>  
            </a>
        </button>

        <a
            v-else
            :href="item.target[0].url"
            class="block w-max ml-auto lg:ml-0 lg:w-auto text-right capitalize text-4xl lg:text-base font-bold"
            :title="item.target[0].title"
            role="menuitem"
            tabindex="0"
            :aria-current="isCurrent ? 'page' : null"
        >
            <span :class="[
                    'py-3 relative z-10 hover:text-blue-800 focus:text-blue-800 transition duration-300 flex justify-end items-center',
                    isCurrent ? 'text-blue-600' : 'text-gray-900'
                ]"
            >
                {{ item.target[0].title }}

                <hr v-if="isCurrent" class="absolute mt-10 lg:mt-6 h-0.5 w-full bg-blue-600">
            </span>
        </a>
    </div>
    

</template>

<script>    
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            }
        },

        computed: {
            isCurrent()
            {
                return this.location() === this.item.target[0].url;
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
