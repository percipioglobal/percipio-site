<template>
    <div class="hidden md:block fixed left-0 bottom-0 w-full overflow-hidden">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 200" xml:space="preserve">
            <g :class="[
                'fill-current',
                swatch.label === 'redblue' ? 'text-' + swatch.primary : 'text-' + swatch.secondary
            ]">
                <polygon points="250,467.1 344.6,412.3 189.6,322.9 500,144.2 500,432.8 250,577 	"/>
                <polygon points="95,199.1 95,268.2 250.3,178.8 250.3,109.5 	"/>
            </g>
            <g :class="[
                'fill-current',
                swatch.label === 'redblue' ? 'text-' + swatch.secondary : 'text-' + swatch.primary
            ]">
                <polygon points="250.3,109.5 250.3,178.8 310.5,144.2"/>
                <polygon points="0,322.9 250,467.1 250,577 0,432.8"/>
                <polygon points="0,144.3 95,199.1 95,268.2 0,322.9"/>
            </g>
        </svg>
    </div>
</template>
<script>
    export default {
        props: {
            swatch: {
                type: Object,
                required: true,
            }
        },

    }
</script>