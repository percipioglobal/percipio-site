<script setup lang="ts">

import { ref, onMounted } from 'vue'
import lottie from 'lottie-web'

interface Props {
    animation: string
}

const props = defineProps<Props>()

const json = ref(null)
const lottieId = ref(`lottie-${ Math.random().toString(36).substr(2, 9) }`)

onMounted(async () => {
    // document.getElementById(`${lottieId.value}`).innerHTML = ""
    json.value = await (await fetch(props.animation)).json()
    console.log(json.value)

    lottie.loadAnimation({
        container: document.getElementById(`${lottieId.value}`), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: props.animation // the path to the animation url
    })
})


</script>

<template> 
    <div :id="lottieId" class="(max-width:768px) 100vw', '(min-width:768px) 55vw animate w-full h-full" data-animation="fadeIn"></div>
</template>