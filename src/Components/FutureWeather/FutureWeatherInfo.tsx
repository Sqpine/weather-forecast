import React from "react";
import s from "../../App.module.scss";
import {getDayName} from "../../utils/utils";
import temperature from "../../images/temperature.png";
import precipitation from "../../images/precip.png";
import wind from "../../images/wind.png";
import sunrise from "../../images/sunrise.png";
import sunset from "../../images/sunset.png";
import moonrise from "../../images/moonrise.png";
import moonset from "../../images/moonset.png";

type PropsType = {
    setActive: (s: number) => void
    active: boolean
    id: number

    avgtemp_c: number
    daily_chance_of_rain: number
    condition: string
    date: string
    icon: string
    maxtemp_c: number
    maxwind_kph: number
    mintemp_c: number
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
}

export const FutureWeatherInfo = (props: PropsType) => {
    const dayName = getDayName(props.date, 'en-US')

    return (
        <div className={`${props.active ? s.active : s.unactive} ${s.tittle}`}
             onClick={() => props.setActive(props.id)}>
            <div>
                <h1>{dayName}</h1>
                <p>{props.date}</p>
            </div>
            <div>
                <div className={s.weatherItemPhoto}>
                    <img width={64} height={64} src={props.icon} alt={props.condition}/>
                    <h2>{props.avgtemp_c} °C</h2>
                </div>
                <h1>{props.condition}</h1>
            </div>
            <div>
                <div className={s.weatherCurrentDetailInfo}>
                    <img src={temperature} alt="Temperature"/>
                    <p>{props.mintemp_c}°C/{props.maxtemp_c}°C</p>
                </div>
                <div className={s.weatherCurrentDetailInfo}>
                    <img src={precipitation} alt="Chance of rain"/>
                    <p>{props.daily_chance_of_rain}%</p>
                </div>
                <div className={s.weatherCurrentDetailInfo}>
                    <img src={wind} alt="Max wind"/>
                    <p>Max wind: {props.maxwind_kph} km/h</p>
                </div>
            </div>
            <div className={s.astroInfo}>
                <div className={s.astroInfoItem}>
                    <div>
                        <img width={30} height={30} src={sunrise} alt="Sunrise"/>
                        <span>{props.sunrise}</span>
                    </div>
                    <div>
                        <img width={30} height={30} src={sunset} alt="Sunset"/>
                        <span>{props.sunset}</span>
                    </div>
                </div>
                <div className={s.astroInfoItem}>
                    <div>
                        <img width={30} height={30} src={moonrise} alt="Moonrise"/>
                        <span>{props.moonrise}</span>
                    </div>
                    <div>
                        <img width={30} height={30} src={moonset} alt="Moonset"/>
                        <span>{props.moonset}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}