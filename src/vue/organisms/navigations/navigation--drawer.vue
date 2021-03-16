<template>
    <aside
        :class="[
            'transform inset-0 bg-white-90 min-h-screen fixed h-full ease-in-out transition-opacity duration-300 -z-10',
            getNavigationActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full',
            getVacancies ? 'pt-24' : 'pt-32'
            ]"
    >

        <div class="h-full w-full">

            <div :class="[
                'w-full h-full flex flex-col items-end  overflow-auto',
                getVacancies ? ' pb-20' : 'lg:py-16'
                ]">
                <!-- main navigation links -->

                <div class="container mx-auto flex flex-col items-end" v-if="getNavigationPrimary">

                    <div class="w-full md:w-1/2 xl:w-1/3 pb-8 lg:pr-16">
                        <navigation--item v-for="item in getNavigationPrimary" :item="item" :key="item.id"></navigation--item>
                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 lg:pr-16" v-if="getSocialMediaLinks">

                        <hr :class="
                                [
                                    'h-2 mb-8 w-full mr-16',
                                    'bg-' + swatch.primary, 
                                ]" 
                        >

                    </div>

                    <div class="w-full md:w-1/2 xl:w-1/3 lg:pr-16" v-if="getSocialMediaLinks">
                        <navigation--social-item v-for="item in getSocialMediaLinks.socialMedia" :item="item" :swatch="swatch" :key="item.id"></navigation--social-item>
                    </div>

                    <div v-if="getVacancies && getVacancies.length > 0" class="w-full md:w-1/2 xl:w-1/3 lg:pr-16 pt-8">
                        <p :class="[
                            'block w-full text-right font-bold font-primary px-4 pb-2 text-2xl',
                            'text-' + swatch.primary
                        ]">
                            Join our company
                        </p>
                        <navigation--vacancies-item v-for="item in getVacancies" :item="item" :swatch="swatch" :key="item.id"></navigation--vacancies-item>
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
            'navigation--item': () => import(/* webpackChunkName: "navigation--item" */ '@/vue/atoms/navigations/navigation--item.vue'),
            'navigation--social-item': () => import(/* webpackChunkName: "navigation--social-item" */ '@/vue/atoms/navigations/navigation--social-item.vue'),
            'navigation--vacancies-item': () => import(/* webpackChunkName: "navigation--vacancies-item" */ '@/vue/atoms/navigations/navigation--vacancies-item.vue'),
            'logo--main': () => import(/* webpackChunkName: "logo--main" */ '@/vue/atoms/logos/logo--main.vue'),
        },

        computed: {
            ...mapGetters(['getCsrfToken', 'getNavigationActive', 'getNavigationGqlToken', 'getSocialMediaLinks', 'getNavigationPrimary', 'getVacancies']),
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
                    this.$store.dispatch('fetchVacancies'),
                    this.$store.dispatch('fetchSocialMediaLinks'),
                ]);
            //}
        }
    }

</script>
