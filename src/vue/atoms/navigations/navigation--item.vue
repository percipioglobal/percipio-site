<template>
    <a
        :href="item.target[0].url"
        class="group block text-right capitalize text-base font-bold"
        :title="item.target[0].title"
        role="menuitem"
        tabindex="0"
        :aria-current="isCurrent ? 'page' : null"
    >
        <div class="py-2 px-4 relative overflow-hidden">
            <span class="relative z-10 hover:text-blue-dark focus:text-blue-dark transition duration-300 flex justify-end items-center">
                {{ item.target[0].title }}
            </span>
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
