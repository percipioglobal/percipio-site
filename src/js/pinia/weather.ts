import { defineStore } from 'pinia'
import axios from 'axios'

interface Weather {
    apiKey: string,
    weather: any,
    timestamp: number
}

export const useWeatherStore = defineStore('storeWeather', {
    state: (): Weather => ({
        apiKey: '8ef4055db6a6c856c7ec9c2d165344ec',
        weather: {},
        timestamp: Date.now()
    }),
    persist: true,
    actions: {
        async fetch(location:string, latitude:string, longitude:string) {
            console.log('weather.ts:',latitude, longitude )
            const d = new Date()
            d.setHours(d.getHours() - 1)
            if (this.timestamp < d.valueOf() || (this.weather[location] ?? null) === null) {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`)
                if(response?.data) {
                    this.timestamp = Date.now()
                    this.weather[location] = response.data
                }
            }
        }
    }
})