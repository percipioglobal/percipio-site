<script setup lang="ts">

import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

interface Props {
    animationWeather: object
}
const props = defineProps<Props>()

const lottieAnimation = ref(null)

const onComplete = () => {
    console.log('completed loop')
}

</script>

<template> 
    <Vue3Lottie
        ref="lottieAnimation"
        :animation-data="props.animationWeather" 
        :loop="true"
        @onLoopComplete="onComplete"
    />
</template>