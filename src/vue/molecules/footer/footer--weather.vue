<script setup lang="ts">

import { ref, onMounted} from 'vue'
import axios from 'axios'

import ZeroOneD from '@/vue/atoms/svgs/svg--zero-one-d.vue';
import ZeroTwoD from '@/vue/atoms/svgs/svg--zero-two-d.vue';
import ZeroThreeD from '@/vue/atoms/svgs/svg--zero-three-d.vue';
import ZeroFourD from '@/vue/atoms/svgs/svg--zero-four-d.vue';
import ZeroNineD from '@/vue/atoms/svgs/svg--zero-nine-d.vue';
import OneZeroD from '@/vue/atoms/svgs/svg--one-zero-d.vue';
import OneOneD from '@/vue/atoms/svgs/svg--one-one-d.vue';
import OneThreeD from '@/vue/atoms/svgs/svg--one-three-d.vue';
import FiveZeroD from '@/vue/atoms/svgs/svg--five-zero-d.vue';

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

// getWeather()

onMounted(async () => {
    getWeather() 
})

//! Typsense error: cannot read properties of undefined (reading '0')
</script>

<template>
    <div class="w-full flex flex-col items-end">
        <span class="text-white text-2xl font-mono after:content-['°']">{{ weather ? Math.floor(weather?.main?.temp) : ''}}</span>
        <ZeroOneD v-if="weather ? weather?.weather[0]?.icon === '01d': ''" />
        <ZeroTwoD v-if="weather ? weather?.weather[0]?.icon === '02d': ''"  />
        <ZeroThreeD v-if="weather ? weather?.weather[0]?.icon === '03d': ''"   />
        <ZeroFourD v-if="weather ? weather?.weather[0]?.icon === '04d': ''"  />
        <ZeroNineD v-if="weather ? weather?.weather[0]?.icon === '09d': ''"  />
        <OneZeroD v-if="weather ? weather?.weather[0]?.icon === '10d': ''"  />
        <OneOneD v-if="weather ? weather?.weather[0]?.icon === '11d': ''"  />
        <OneThreeD v-if="weather ? weather?.weather[0]?.icon === '13d': ''"  />
        <FiveZeroD v-if="weather ? weather?.weather[0]?.icon === '50d': ''"  /> 
    </div>
</template>