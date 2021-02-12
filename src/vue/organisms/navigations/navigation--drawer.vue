<template>
    <aside
        :class="[
            'transform inset-0 bg-white-90 min-h-screen fixed h-full overflow-auto ease-in-out transition-opacity duration-300 -z-10 pt-32',
            getNavigationActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            ]"
    >

        <div class="h-full">

            <div class="w-full h-full py-16 flex flex-col items-end ">
                <!-- main navigation links -->

                <div class="container mx-auto">
                    <div
                        class="pb-12"
                        v-if="getNavigationPrimary"
                    >
                        <navigation--item v-for="item in getNavigationPrimary" :item="item" :key="item.id"></navigation--item>
                    </div>
                </div>

                <div class="container mx-auto flex justify-end">

                    <hr class="h-px bg-gray-800 mb-12 w-96" v-if="getSocialMediaLinks">

                </div>

                <!-- social media links -->

                <div class="container mx-auto" v-if="getSocialMediaLinks">
                    <navigation--social-item v-for="item in getSocialMediaLinks.socialMedia" :item="item" :color="color" :key="item.id"></navigation--social-item>
                </div>

            </div>

        </div>

    </aside>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        props: {
            color: {
                type: String,
                required: false,
                default: 'blue-600',
            }
        },
        components: {
            'navigation--item': () => import(/* webpackChunkName: "navigation--item" */ '../../molecules/navigations/navigation--item.vue'),
            'navigation--social-item': () => import(/* webpackChunkName: "navigation--social-item" */ '../../molecules/navigations/navigation--social-item.vue'),
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
