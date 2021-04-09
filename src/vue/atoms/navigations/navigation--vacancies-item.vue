<template>
    <a
        :href="item.url"
        class="group block capitalize text-lg font-bold text-right"
        :title="item.title"
        target="_blank"
        rel="noopener"
        role="menuitem"
        tabindex="0"
        v-on:focus="openMenu"
    >
        <div class="px-2 mx-2 relative overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 group-focus:text-white-100 transition duration-300">{{ item.title }}</span>
            <div :class="[
                'absolute top-0 left-0 ml-1 group-hover:ml-0 group-focus:ml-0 w-full h-full transform translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition duration-300 ease-blog',
                'bg-' + swatch.primary
            ]"></div>
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
