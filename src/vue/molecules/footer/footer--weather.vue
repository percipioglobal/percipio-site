<script setup lang="ts">

import { onMounted } from 'vue'
import  { storeToRefs } from 'pinia'
import { useWeatherStore } from '@/js/pinia/weather'

import ZeroOneD from '@/vue/atoms/json/zero-one-d.json'
import ZeroTwoD from '@/vue/atoms/json/zero-two-d.json'
import ZeroThreeD from '@/vue/atoms/json/zero-three-d.json'
import ZeroFourD from '@/vue/atoms/json/zero-four-d.json'
import ZeroNineD from '@/vue/atoms/json/zero-nine-d.json'
import OneZeroD from '@/vue/atoms/json/one-zero-d.json'
import OneOneD from '@/vue/atoms/json/one-one-d.json'
import OneThreeD from '@/vue/atoms/json/one-three-d.json'
import FiveZeroD from '@/vue/atoms/json/five-zero-d.json'

import AnimationWeather from '@/vue/atoms/animations/animation-weather.vue'


interface Props {
    longitude: number,
    latitude: number,
    location: string,
    city: string,
    country: string
}

const props = defineProps<Props>()
const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)


onMounted(() => {
    weatherStore.fetch(props.location, props.latitude, props.longitude)
})

</script>

<template>
    <div> 
        <div 
            v-if="(weather[location] ?? null) && (weather[location]?.weather[0] ?? null)"
            class="w-full flex flex-col items-center relative"
        >
            <span class="hidden absolute lg:-mt-6 ml-32 md:block text-white text-right md:text-base text-2xl font-mono after:content-['°']">{{ Math.floor(weather[location]?.main?.temp) }}</span>
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '01d' || weather[location]?.weather[0]?.icon ==='01n'" 
                :animation-weather="ZeroOneD"
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '02d' || weather[location]?.weather[0]?.icon ==='02n'" 
                :animation-weather="ZeroTwoD"  
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '03d' || weather[location]?.weather[0]?.icon ==='03n'" 
                :animation-weather="ZeroThreeD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '04d' || weather[location]?.weather[0]?.icon ==='04n'" 
                :animation-weather="ZeroFourD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '09d' || weather[location]?.weather[0]?.icon ==='09n'" 
                :animation-weather="ZeroNineD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '10d' || weather[location]?.weather[0]?.icon ==='10n'" 
                :animation-weather="OneZeroD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '11d' || weather[location]?.weather[0]?.icon ==='11n'" 
                :animation-weather="OneOneD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '13d' || weather[location]?.weather[0]?.icon ==='13n'" 
                :animation-weather="OneThreeD" 
            />
            <AnimationWeather 
                v-if="weather[location]?.weather[0]?.icon === '50d' || weather[location]?.weather[0]?.icon === '50n'" 
                :animation-weather="FiveZeroD" 
            />
            <div class="flex  justify-center items-center">
                <span class="inline-block text-white prose text-lg md:text-3xl font-medium tracking-tightest prose-strong:text-pink-500 prose-strong:font-normal"> {{ city ? city : '' }} </span>
                <span class="md:hidden ml-2 text-white text-sm font-mono after:content-['°']">{{ Math.floor(weather[location]?.main?.temp) }}</span>
            </div>
            <span class="font-primary text-sm md:text-base text-white text-center mt-2"> {{ city ? country : '' }} </span>
        </div> 
    </div>
</template>