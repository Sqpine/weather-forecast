import React from "react";
import {ForecastDay, HourWeatherType} from "../../API/API-Weather";
import {WeatherSlider} from "./Slider/WeatherSlider";
import {FutureWeatherInfo} from "./FutureWeatherInfo";

type PropsType = {
    setActive: (s: number) => void
    active: boolean
    id: number
    hour: HourWeatherType[]
    forecastDay: ForecastDay
}

export const WeatherTitle = React.memo((props: PropsType) => {

    return (
        <div>
            <FutureWeatherInfo
                avgtemp_c={props.forecastDay.day.avgtemp_c}
                daily_chance_of_rain={props.forecastDay.day.daily_chance_of_rain}
                condition={props.forecastDay.day.condition.text}
                date={props.forecastDay.date}
                icon={props.forecastDay.day.condition.icon}
                maxtemp_c={props.forecastDay.day.maxtemp_c}
                maxwind_kph={props.forecastDay.day.maxwind_kph}
                mintemp_c={props.forecastDay.day.mintemp_c}
                sunrise={props.forecastDay.astro.sunrise}
                sunset={props.forecastDay.astro.sunset}
                moonrise={props.forecastDay.astro.moonrise}
                moonset={props.forecastDay.astro.moonset}
                active={props.active}
                id={props.id}
                setActive={props.setActive}
            />
            {props.active && <WeatherSlider hour={props.hour}/>}
        </div>
    )
})