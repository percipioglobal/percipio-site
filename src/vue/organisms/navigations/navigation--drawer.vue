<template>
    <aside
        :class="[
            'transform inset-0 bg-white-90 min-h-screen fixed h-full ease-in-out transition-opacity duration-300 -z-10 pt-32',
            getNavigationActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            ]"
    >

        <div class="h-full w-full">

            <div class="w-full h-full lg:py-16 flex flex-col items-end  overflow-auto">
                <!-- main navigation links -->

                <div class="container mx-auto flex flex-col items-end" v-if="getNavigationPrimary">

                    <div class="w-full md:w-1/2 xl:w-1/3 pb-12 lg:pr-16">
                        <navigation--item v-for="item in getNavigationPrimary" :item="item" :key="item.id"></navigation--item>
                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 lg:pr-16" v-if="getSocialMediaLinks">

                        <hr :class="
                                [
                                    'h-2 mb-12 w-full mr-16',
                                    'bg-' + swatch.primary, 
                                ]" 
                        >

                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 lg:pr-16" v-if="getSocialMediaLinks">
                        <navigation--social-item v-for="item in getSocialMediaLinks.socialMedia" :item="item" :swatch="swatch" :key="item.id"></navigation--social-item>
                    </div>

                </div>

            </div>

        </div>

        <logo--main :swatch="swatch"></logo--main>

    </aside>
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
        components: {
            'navigation--item': () => import(/* webpackChunkName: "navigation--item" */ '../../atoms/navigations/navigation--item.vue'),
            'navigation--social-item': () => import(/* webpackChunkName: "navigation--social-item" */ '../../atoms/navigations/navigation--social-item.vue'),
            'logo--main': () => import(/* webpackChunkName: "logo--main" */ '../../atoms/logos/logo--main.vue'),
        },

        computed: {
            ...mapGetters(['getCsrfToken', 'getNavigationActive', 'getNavigationGqlToken', 'getSocialMediaLinks', 'getNavigationPrimary']),
        },

        methods: {
            closeMenu(evt) {
                if (evt.keyCode === 27) {
                    this.$store.commit('setNavigationActive', false);
                    document.body.classList.remove("overflow-hidden");
                }
            }
        },

        created: function(){
            document.addEventListener('keyup', this.closeMenu);
        },

        destroyed: function(){
            document.removeEventListener('keyup', this.closeMenu);
        },

        async mounted() {
            // Get the CSRF param to verify submissions before attempting any other queries
            if ( !this.getCsrfToken ) {
                await this.$store.dispatch('fetchCsrf');
            }

            // Wait for the GQL token before attempting GQL queries
            if ( !this.getNavigationGqlToken ) {
                await this.$store.dispatch('fetchNavigationGqlToken');
            }

            // Wait for the Navigation links and Social Media Links to be fetched
            //if ( !this.getSocialMediaLinks || this.getNavigationPrimary ) {
                await Promise.all([
                    this.$store.dispatch('fetchNavigationPrimary'),
                    this.$store.dispatch('fetchSocialMediaLinks'),
                ]);
            //}
        }
    }

</script>
