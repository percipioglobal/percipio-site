import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('storeWeather', {
    state() {
        return {
            apiKey: '2f90953a8384cc18f9ea51fce298caa3',
            weather: {},
            timestamp: Date.now()
        }
    },
    persist: true,
    actions:{
        async fetch(location, latitude, longitude) {
            const d = new Date()
            d.setHours(d.getHours() - 1)
            if (this.timestamp < d || (this.weather[location] ?? null) === null) {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`)
                if(response?.data) {
                    this.timestamp = Date.now()
                    this.weather[location] = response.data
                }
            }
        }
    }
})