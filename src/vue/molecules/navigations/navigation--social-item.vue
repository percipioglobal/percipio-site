<template>
    <a
        :href="item.socialMediaUrl.url"
        class="block capitalize text-lg font-bold pr-16 text-right"
        :title="item.socialMediaType"
        target="_blank"
        rel="noopener"
    >
        <div class="px-2 mx-2 relative group overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 transition duration-300">{{ item.socialMediaType }}</span>
            <div :class="[
                'absolute top-0 left-0 w-full h-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-blog',
                'bg-' + color
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
            color: {
                type: String,
                required: false,
                default: 'blue-600',
            }
        },
    }

</script>
