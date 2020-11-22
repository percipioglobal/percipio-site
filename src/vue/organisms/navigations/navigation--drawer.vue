<template>
    <aside
        :class="[
            'transform inset-0 bg-white-90 min-h-screen fixed h-full overflow-auto ease-in-out transition-opacity duration-300 -z-10 pt-32',
            getNavigationActive ? 'opacity-100' : 'opacity-0'
            ]"
    >

        <div class="container mx-auto flex justify-end h-full">

            <div class="h-full p-16">
                <!-- main navigation links -->

                <div 
                    :class="[ 
                        'space-y-4 pb-12',
                        getSocialMediaLinks.socialMedia ? 'border-b border-gray-800 mb-12' : ''
                    ]"
                    v-if="getNavigationPrimary"
                >

                    <a
                        v-for="item in getNavigationPrimary"
                        :key="item.id"
                        :href="item.url"
                        class="block capitalize text-4xl font-bold hover:underline pr-16"
                        :title="item.title"
                    >
                        {{ item.title }}
                    </a>

                </div>
                


                <!-- social media links -->

                <div class="space-y-2" v-if="getSocialMediaLinks.socialMedia">

                    <a 
                        v-for="social in getSocialMediaLinks.socialMedia" 
                        :key="social.id"
                        :href="social.socialMediaUrl.url"
                        class="block capitalize text-lg font-bold hover:underline pr-16"
                        :title="social.socialMediaType"
                        target="_blank"
                        rel="noopener"
                    >
                        {{ social.socialMediaType }}
                    </a>

                </div>

            </div>

            

        </div>

        

    </aside>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['getCsrfToken', 'getNavigationActive', 'getNavigationGqlToken', 'getSocialMediaLinks', 'getNavigationPrimary']),
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