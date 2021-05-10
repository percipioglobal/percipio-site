<template>
    <button 
        @click.prevent="toggleMenu"
        class="ml-auto" 
        aria-label="Open or close navigation"
        :aria-expanded="getNavigationActive ? 'true' : 'false'"
        ref="buttonHamburger"
    >

        <span class="">
            <span 
                :class="[
                    'bg-' + swatch.primary,
                    'mb-2 block w-12 h-2',
                    'transform transition ease-in-out duration-200',
                    getNavigationActive ? 'rotate-45 translate-y-2' : ''
                ]">
            </span>
            <span 
                :class="[
                    'bg-' + swatch.primary,
                    'block w-12 h-2',
                    'transform transition ease-in-out duration-200',
                    getNavigationActive ? '-rotate-45 -translate-y-2' : ''
                ]">
            </span>
        </span>

    </button>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {

        props: {
            swatch: {
                type: Object,
                required: true,
            }
        },

        computed: {
            ...mapGetters(['getNavigationActive']),
        },

        created: function(){
            document.addEventListener('keyup', this.keyboardHandle);
        },

        destroyed: function(){
            document.removeEventListener('keyup', this.keyboardHandle);
        },

        methods: {
            keyboardHandle(evt)
            {
                if (evt.keyCode === 27)
                {
                    // this.closeMenu();
                    this.$refs.buttonHamburger.focus();
                    this.$refs.buttonHamburger.click();
                }
            },
            toggleMenu() {
                this.$store.commit('setNavigationActive', !this.getNavigationActive);
                document.body.classList.toggle("overflow-hidden");
            }
        }

    }

</script>