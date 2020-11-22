<template>
    <button--hamburger></button--hamburger>
</template>

<script>

    export default {
        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '../../atoms/buttons/button--hamburger.vue'),
        },
    }

</script>