<template>

    <div>
        <nav :class="[
                'fixed z-20 w-full bg-white-70 transition-all duration-500 ease-in-out',
                showNavigation === true || getNavigationActive ? 'top-0' : '-top-full'
            ]"
            @blur="closeMenu"
        >

            <div class="container mx-auto max-w-screen-2xl flex items-center py-3">

                <slot></slot>

                <div>
                    <a href="#page" role="button" tabindex="0" class="absolute left:0 top-sr w-1 h-1 overflow-hidden focus:static focus:w-auto focus:h-auto focus:overflow-visible">
                        Skip navigation
                    </a>
                </div>

                <button--hamburger :swatch="swatch"></button--hamburger>

                <navigation--drawer :swatch="swatch"></navigation--drawer>

            </div>

        </nav>
    </div>

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

        data: () => ({
            prevScrollpos: null,
            showNavigation: true,
        }),

        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '@/vue/atoms/buttons/button--hamburger.vue'),
            'navigation--drawer': () => import(/* webpackChunkName: "navigation--drawer" */ '@/vue/organisms/navigations/navigation--drawer.vue'),
        },

        computed: {
            ...mapGetters(['getNavigationActive']),
        },

        methods: {
            handleScroll(evt){
                var currentScrollPos = window.pageYOffset;
                if (this.prevScrollpos > currentScrollPos) {
                    this.showNavigation = true;
                } else {
                    this.showNavigation = false;
                }
                this.prevScrollpos = currentScrollPos;

                if(this.prevScrollpos < 30){
                    this.showNavigation = true;
                }
            },
            closeMenu()
            {
                this.$store.commit('setNavigationActive', false);
                document.body.classList.remove("overflow-hidden");
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

</script>
