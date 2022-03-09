<template>
    <a
        :href="item.socialMediaUrl.url"
        class="block capitalize text-lg font-bold text-right"
        :title="item.socialMediaType"
        target="_blank"
        rel="noopener"
        role="menuitem"
        tabindex="0"
        v-on:focus="openMenu"
    >
        <div class="px-2 mx-2 relative overflow-hidden">
            <span class="relative hover:text-blue-800 focus:text-blue-800 transition duration-300">{{ item.socialMediaType }}</span>
        </div>
    </a>

</template>

<script>

    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
            swatch: {
                type: Object,
                required: true,
            }
        },

        methods: {
            openMenu()
            {
                this.$store.commit('setNavigationActive', true);
                document.body.classList.toggle("overflow-hidden");
            }
        },
    }

</script>
