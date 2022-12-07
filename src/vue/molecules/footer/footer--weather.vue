<script setup lang="ts">

import { ref, onMounted} from 'vue'
import axios from 'axios'

import ZeroOneD from '@/vue/atoms/svgs/svg--zero-one-d.vue';
import ZeroThreeD from '@/vue/atoms/svgs/svg--zero-three-d.vue';


interface Props {
    longitude: number,
    latitude: number
}

const props = defineProps<Props>()

const apiKey = '2f90953a8384cc18f9ea51fce298caa3'

const weather = ref([])

const getWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=metric&appid=${apiKey}`);
        weather.value = response.data
        console.log(weather.value)
        return weather.value
    } catch (error) {
        console.error(error);
    }
}

getWeather()

// onMounted(async () => {
//     getWeather() 
// })

//Todo: add long and lat to cms ✅
//Todo: pass on long and lat props from twig ✅
//Todo: set reponse (weatheer) as an empty array and then return reponse.value
//Todo: make api call using axios on monunt
//Todo: setup lut for svg icons (where will svgs be stored?)
//Todo: if icon code === svg code, display svg else display nothinhg
//Todo: wrap template in cache tag (3hr reshresh)
//Todo: loading spinner whilst loading

</script>

<template>
    <div class="w-full flex flex-col items-end">
        <span class="text-pink-500 after:content-['*'] ">{{ weather ? weather?.main?.temp : ''}}</span>
        <!-- <ZeroOneD v-if="weather?.weather[0]?.icon === '01d'"  /> -->
        <ZeroThreeD  />
    </div>
</template>