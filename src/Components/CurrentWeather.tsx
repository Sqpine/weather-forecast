import s from "../App.module.scss";
import {WeatherNow} from "./WeatherNow";
import {DetailInfo} from "./DetailInfo";
import React from "react";
import {CurrentType, ForecastDay, LocationType} from "../API/API-Weather";

type PropsType = {
    weatherNow: CurrentType | undefined
    location: LocationType | undefined
    weather: ForecastDay | undefined
    isFetching: boolean
}
export const CurrentWeather = (props: PropsType) => {
    return (
        <div className={`${s.detailInfo} ${props.isFetching && s.fetching}`}>
            {props.weatherNow && props.location && <WeatherNow
                {...props.weatherNow}
                name={props.location?.name}
                region={props.location?.region}
                country={props.location?.country}
            />}
            {props.weather&&
                <DetailInfo date={props.weather.date} hour={props.weather.hour}/>
            }
        </div>
    )
}