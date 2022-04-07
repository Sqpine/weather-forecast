import React from "react";
import {ForecastDay} from "../../API/API-Weather";
import {WeatherTitle} from "./WeatherTitle";
import s from '../../App.module.scss'

type PropsType = {
    futureWeather: ForecastDay[] | undefined | null
    setActive: (s: number) => void
    active: number
    isFetching: boolean
}
export const FutureWeather = React.memo((props: PropsType) => {

    return (
        <div className={`${s.futureWeather} ${props.isFetching && s.fetching}`}>

            {props.futureWeather?.map((e, key) => {
                const active = key === props.active
                return <WeatherTitle
                    key={e.date}
                    active={active}
                    setActive={props.setActive}
                    id={key}
                    hour={e.hour}
                    forecastDay={e}
                />
            })
            }
        </div>
    )
})