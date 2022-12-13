<script setup lang="ts">

import { onMounted} from 'vue'
import  { storeToRefs } from 'pinia'
import { useWeatherStore } from '@/js/pinia/weather'


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
    longitude: string,
    latitude: number,
    location: number
}

const props = defineProps<Props>()
const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)


onMounted(() => {
    console.log('on fetch:', props.latitude, props.longitude)
    weatherStore.fetch(props.location, props.latitude, props.longitude)
})
</script>

<template>
    <div 
        v-if="(weather[location] ?? null) && (weather[location]?.weather[0] ?? null)"
        class="w-full flex flex-col items-end"
    >
        <span class="hidden text-white text-2xl font-mono after:content-[°]">{{ Math.floor(weather[location]?.main?.temp) }}</span>
        <ZeroOneD v-if="weather[location]?.weather[0]?.icon === '01d' || weather[location]?.weather[0]?.icon ==='01n'" />
        <ZeroTwoD v-if="weather[location]?.weather[0]?.icon === '02d' || weather[location]?.weather[0]?.icon ==='02n'" />
        <ZeroThreeD v-if="weather[location]?.weather[0]?.icon === '03d' || weather[location]?.weather[0]?.icon ==='03n' " />
        <ZeroFourD v-if="weather[location]?.weather[0]?.icon === '04d' || weather[location]?.weather[0]?.icon ==='04n'" />
        <ZeroNineD v-if="weather[location]?.weather[0]?.icon === '09d' || weather[location]?.weather[0]?.icon ==='09n'" />
        <OneZeroD v-if="weather[location]?.weather[0]?.icon === '10d' || weather[location]?.weather[0]?.icon ==='10n'" />
        <OneOneD v-if="weather[location]?.weather[0]?.icon === '11d' || weather[location]?.weather[0]?.icon ==='11n'" />
        <OneThreeD v-if="weather[location]?.weather[0]?.icon === '13d' || weather[location]?.weather[0]?.icon ==='13n'" />
        <FiveZeroD v-if="weather[location]?.weather[0]?.icon === '50d' || weather[location]?.weather[0]?.icon === '50n'" />
    </div>
</template>