<template>
    <button @click.prevent="toggleMenu" class="ml-auto">

        <span class="">
            <span 
                :class="[
                    'bg-primary-600 mb-2 block w-12 h-2',
                    'transform transition ease-in-out duration-200',
                    navOpen ? 'rotate-45 translate-y-2' : ''
                ]">
            </span>
            <span 
                :class="[
                    'bg-primary-600 block w-12 h-2',
                    'transform transition ease-in-out duration-200',
                    navOpen ? '-rotate-45 -translate-y-2' : ''
                ]">
            </span>
        </span>

    </button>
</template>

<script>

    export default {

        data: () => ({
            navOpen: false,
        }),

        methods: {
            toggleMenu() {
                this.navOpen = !this.navOpen;
            }
        }

    }

</script>