<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'

interface Props {
    animation: string
}

const props = defineProps<Props>()

</script>

<template> 
    <Vue3Lottie 
        :animationLink="props.animation"
    />
</template>