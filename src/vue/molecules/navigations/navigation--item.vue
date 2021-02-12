<template>
    <a
        :href="item.target[0].url"
        class="block text-right capitalize text-4xl font-bold pr-16"
        :title="item.target[0].id"
    >
        <div class="inline-block py-2 px-4 relative group overflow-hidden">
            <span class="relative z-10 group-hover:text-white-100 transition duration-300">
                {{ item.target[0].title }}
            </span>
            <div :class="[
                'absolute top-0 left-0 w-full h-full transform -translate-x-full group-hover:-translate-x-0 transition duration-300 ease-blog',
                'bg-red-500'
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
