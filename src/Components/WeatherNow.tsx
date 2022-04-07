import React from "react";
import {ConditionType} from "../API/API-Weather";
import s from '../App.module.scss'
import precipitation from '../images/precip.png'
import wind from '../images/wind.png'
import temperature from '../images/temperature.png'

type PropsType = {
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

    name: string
    region: string
    country: string
}
export const WeatherNow = (props: PropsType) => {

    return (
        <div style={{padding: 20}}>
            <div className={s.weatherNow}>
                <div>
                    <div className={s.weatherItemPhoto}>
                        <img width={64} height={64} src={props.condition.icon} alt={props.condition.text}/>
                        <h2>{props.temp_c}°C</h2>
                    </div>
                    <h1>{props.condition.text}</h1>
                </div>
                <div>
                    <div className={s.weatherCurrentDetailInfo}>
                        <img src={precipitation} alt="Precipitation"/>
                        <p>Precipitation: {props.precip_mm} mm</p>
                    </div>
                    <div className={s.weatherCurrentDetailInfo}>
                        <img src={temperature} alt="Temperature"/>
                        <p>Feels like: {props.feelslike_c}°C</p>
                    </div>
                    <div className={s.weatherCurrentDetailInfo}>
                        <img src={wind} alt="Wind"/>
                        <p>Wind: {props.wind_kph} km/h</p>
                    </div>
                </div>
                <div>
                    <h1>{props.name}</h1>
                    <h1>{props.region}</h1>
                    <h1>{props.country}</h1>
                </div>
            </div>
            <p>Last updated: {props.last_updated}</p>
        </div>
    )
}