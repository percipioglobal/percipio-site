<template>

    <nav class="fixed z-10 w-full">

        <div class="container mx-auto flex items-center py-3 px-8 lg:px-0">

            <slot></slot>

            <button--hamburger :color="color"></button--hamburger>

            <navigation--drawer></navigation--drawer>

        </div>

    </nav>

</template>

<script>

    export default {
        props: {
            color: {
                type: String,
                required: false,
                default: 'blue-600',
            }
        },
        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '../../atoms/buttons/button--hamburger.vue'),
            'navigation--drawer': () => import(/* webpackChunkName: "navigation--drawer" */ './navigation--drawer.vue'),
        },
    }

</script>
