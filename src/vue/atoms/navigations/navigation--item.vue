<template>
    <a
        :href="item.target[0].url"
        class="block text-right capitalize text-4xl font-bold"
        :title="item.target[0].title"
    >
        <div class="py-2 px-4 relative group overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 transition duration-300">
                {{ item.target[0].title }}
            </span>
            <div :class="[
                'absolute top-0 ml-1 group-hover:ml-0 left-0 w-full h-full transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-blog',
                'bg-' + swatch,
            ]"></div>
        </div>
    </a>

</template>

<script>
    import { swatch } from '../../../js/mixins/computed';
    
    export default {
        mixins: [ swatch ],
        props: {
            item: {
                type: Object,
                required: true,
            }
        },
    }

</script>
