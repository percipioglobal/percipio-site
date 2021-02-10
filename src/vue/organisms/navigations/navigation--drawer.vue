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

                        <a
                            v-for="item in getNavigationPrimary"
                            :key="item.navigationButton.text"
                            :href="item.navigationButton.url"
                            :target="item.navigationButton.target ? item.navigationButton.target : '_self'"
                            class="block text-right capitalize text-4xl font-bold pr-16"
                            :title="item.navigationButton.text"
                        >
                            <div class="inline-block py-2 px-4 relative group overflow-hidden">
                                <span class="relative z-10 group-hover:text-white-100 transition duration-300">{{ item.navigationButton.text }}</span>
                                <div :class="[
                                    'absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:-translate-x-0 transition duration-300 ease-blog',
                                    'bg-' + color
                                ]"></div>
                            </div>
                        </a>

                    </div>
                </div>

                <div class="container mx-auto flex justify-end">

                    <hr class="h-px bg-gray-800 mb-12 w-96" v-if="getSocialMediaLinks">

                </div>

                <!-- social media links -->

                <div class="container mx-auto" v-if="getSocialMediaLinks">

                    <a
                        v-for="social in getSocialMediaLinks.socialMedia"
                        :key="social.id"
                        :href="social.socialMediaUrl.url"
                        class="block capitalize text-lg font-bold pr-16 text-right"
                        :title="social.socialMediaType"
                        target="_blank"
                        rel="noopener"
                    >
                        <div class="inline-block px-2 mx-2 relative group overflow-hidden">
                            <span class="relative z-10 group-hover:text-white-100 transition duration-300">{{ social.socialMediaType }}</span>
                            <div :class="[
                                'absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:-translate-x-0 transition duration-300 ease-blog',
                                'bg-' + color
                            ]"></div>
                        </div>
                    </a>

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
