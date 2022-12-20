<script setup lang="ts">

import { ref, onMounted } from 'vue'
import lottie from 'lottie-web'


interface Props {
    animationWeather: object
}

const props = defineProps<Props>()

const lottieId = ref(`lottie-${ Math.random().toString(36).substr(2, 9) }`)

onMounted(async () => {
    document.getElementById(`${lottieId.value}`).innerHTML = ""

    lottie.loadAnimation({
        container: document.getElementById(`${lottieId.value}`), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: props.animationWeather
    })
})
</script>

<template> 
    <div 
        :id="lottieId" 
        class="w-full h-full mb-8" 
    />
</template>