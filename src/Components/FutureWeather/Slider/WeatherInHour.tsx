import React from "react";
import {motion} from 'framer-motion'
type PropsType = {
    icon: string
    temperature: number
    time: string
}
export const WeatherInHour = (props: PropsType) => {
    const time = props.time.slice(11)
    console.log('WeatherInHour')
    return (
        <motion.div>
            <p>{time}</p>
            <img src={props.icon} alt="Weather"/>
            <p>{props.temperature}°C</p>
        </motion.div>
    )
}