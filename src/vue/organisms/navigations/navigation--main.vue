<template>

    <div>
        <nav :class="[
            'fixed z-10 w-full bg-white-70 transition-all duration-500 ease-in-out',
            showNavigation === true ? 'top-0' : '-top-full'
        ]">

            <div class="container mx-auto max-w-screen-2xl flex items-center py-3">

                <slot></slot>

                <button--hamburger :color="color"></button--hamburger>

                <navigation--drawer></navigation--drawer>

            </div>

        </nav>
    </div>

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
        data: () => ({
            prevScrollpos: null,
            showNavigation: true,
        }),
        components: {
            'button--hamburger': () => import(/* webpackChunkName: "button--hamburger" */ '../../atoms/buttons/button--hamburger.vue'),
            'navigation--drawer': () => import(/* webpackChunkName: "navigation--drawer" */ './navigation--drawer.vue'),
        },
        methods: {
            handleScroll(evt){
                var currentScrollPos = window.pageYOffset;
                if (this.prevScrollpos > currentScrollPos) {
                    this.showNavigation = true;
                } else {
                    this.showNavigation = false;
                }
                this.prevScrollpos = currentScrollPos;

                if(this.prevScrollpos === 0){
                    this.showNavigation = true;
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

</script>
