<script setup lang="ts">

import { Vue3Lottie } from 'vue3-lottie'

interface Props {
    animation: string
}

const props = defineProps<Props>()

</script>

<template> 
    <Vue3Lottie 
        :animation-link="props.animation"
    />
</template>