import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
});

async function forecastWeather(term: string, days: number): Promise<WheatherDataType | string> {
    try {
        return await instance.get('/forecast.json', {
                params: {
                    key: '7262a13568bf40df83f184430221103',
                    q: term,
                    days: days,
                }
            }
        ).then(e => e.data)
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return `${err.message}`
        } else return `Some error occurred ${err}`
    }
}

export const APIMethod = {
    getWeather: (term: string) => {
        return forecastWeather(term, 3)
    },
}
export type LocationType = {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}
export type ConditionType = {
    text: string
    icon: string
}
export type CurrentType = {
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: ConditionType
    wind_kph: number
    pressure_mb: number
    precip_mm: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    uv: number
}
type TypeOfForecastDay = {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_kph: number
    totalprecip_mm: number
    daily_chance_of_rain: number
    condition: ConditionType
}
type AstroType = {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
}
type ForecastType = {
    forecastday: ForecastDay[]
}
export type HourWeatherType = {
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: ConditionType
    wind_kph: number
    pressure_mb: number
    precip_mm: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    chance_of_rain: number
}
export type ForecastDay = {
    date: string
    day: TypeOfForecastDay
    astro: AstroType
    hour: HourWeatherType[]
}
export type WheatherDataType = {
    location: LocationType
    current: CurrentType
    forecast: ForecastType
}
