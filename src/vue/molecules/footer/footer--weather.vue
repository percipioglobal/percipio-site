<script setup lang="ts">
// import { ref } from 'vue'
// import axios from 'axios'

interface Props {
    longitude: number,
    latitude: number
}

const props = defineProps<Props>()


// const apiKey = '2f90953a8384cc18f9ea51fce298caa3'
// const lat = props.latitude
// const lon = props.longitude

// const response = ref([])

// const getWeather = async () => {
//     try {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//         response.value = response.data
//         console.log(response.value);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getWeather()

// const onMounted = (() => {
//     console.log('test')
// })



//Todo: add long and lat to cms
//Todo: pass on long and lat props from twig
//Todo: set reponse as an empty array and then return reponse.value
//Todo: make api call using axios on monunt
//Todo: setup lut for svg icons (where will svgs be stored?)
//Todo: if icon code === svg code, display svg else display nothinhg
//Todo: wrap template in cache tag (3hr reshresh)
//Todo: loading spinner whilst loading

</script>

<template>
    <div class="w-full flex justify-between">
        <span> long: {{ longitude }}</span>
        <span> lat: {{ latitude }}</span>
    </div>
</template>