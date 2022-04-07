import React, {useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion";
import s from "../../../App.module.scss";
import {WeatherInHour} from "./WeatherInHour";
import {HourWeatherType} from "../../../API/API-Weather";

type PropsType = {
    hour:HourWeatherType[]
}

export const WeatherSlider = (props: PropsType) => {
    const [width, setWidth] = useState(0)
    const [elementRect, setElementRect] = useState();

    const carousel = useCallback((node) => {
        setElementRect(node);
    }, []);

    useEffect(() => {
        if (elementRect) {
            const {offsetWidth, scrollWidth} = elementRect
            setWidth(-(scrollWidth - offsetWidth))
        }
    }, [elementRect])

    return (
        <motion.div className={s.weatherCarousel}
                    ref={carousel}
                    whileTap={{cursor: 'grabbing'}}>
            <motion.div className={s.weatherInHour} drag='x'
                        dragConstraints={{
                            right: 0,
                            left: width - 50,
                        }}>
                {props.hour.map(e => <WeatherInHour
                    key={e.time} icon={e.condition.icon}
                    temperature={e.temp_c} time={e.time}/>)}
            </motion.div>
        </motion.div>
    )
}