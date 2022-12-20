<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

interface Props {
    animationWeather: object
}
const props = defineProps<Props>()

</script>

<template> 
    <Vue3Lottie 
        :animationData="props.animationWeather" 
        :height="full" 
        :width="full"
    />
</template>