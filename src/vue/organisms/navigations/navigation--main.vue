<template>


    <nav class="fixed z-10">

        <div class="container mx-auto flex items-center py-8">

            <slot></slot>

            <button--hamburger></button--hamburger>
            <navigation--drawer></navigation--drawer>

        </div>

        

    </nav>
    
</template>

<script>

    export default {
        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '../../atoms/buttons/button--hamburger.vue'),
            'navigation--drawer': () => import(/* webpackChunkName: "navigation--drawer" */ './navigation--drawer.vue'),
        },
    }

</script>