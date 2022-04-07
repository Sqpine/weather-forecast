import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {FutureWeather} from "./Components/FutureWeather/FutureWeather";
import {useSearchParams} from "react-router-dom";
import {APIMethod, WheatherDataType} from "./API/API-Weather";
import {CurrentWeather} from "./Components/CurrentWeather";
import CircularProgress from "@mui/material/CircularProgress";
import {SnackbarInfo} from "./Components/SnackbarInfo";
import {SearchBar} from "./Components/SearchBar";

const App = () => {

    const [weather, setWeather] = useState<WheatherDataType | null>(null)
    const [activeTittle, setActiveTittle] = useState<number>(0)
    const [isFetching, setFetching] = useState<boolean>(false)
    const [params, setSearch] = useState<string>('')
    const [loadingApp, setLoading] = useState<boolean>(true)
    const [hasError, setHasError] = useState<string | null>(null)

    let [searchParams, setSearchParams] = useSearchParams()

    const locationSearch = searchParams.get("location") || 'Kiev';

    useEffect(() => {
        setSearchParams({
            location: locationSearch,
        })
    }, [])

    useEffect(() => {
        if (params) {
            setSearchParams({
                location: params,
            })
        }
    }, [params])

    useEffect(() => {
        if (!isFetching) {
            setFetching(true)
        }

        APIMethod.getWeather(locationSearch).then(r => {
            if (typeof r !== "string") {
                setWeather(r)
                setFetching(false)
                setActiveTittle(0)
                setLoading(false)
                if (hasError) {
                    setHasError(null)
                }
            } else {
                setHasError(r)
                setFetching(false)
            }
        })
    }, [locationSearch])

    if (loadingApp) {
        return <div className={s.initializeApp}>
            <SnackbarInfo error={hasError}/>
            <CircularProgress className={s.loader} size={200}/>
        </div>
    }

    return (
        <div className={s.appWindow}>
            <SnackbarInfo error={hasError}/>
            <SearchBar isFetching={isFetching} params={locationSearch} setSearchParams={setSearch}/>
            <CurrentWeather weatherNow={weather?.current} location={weather?.location}
                            weather={weather?.forecast.forecastday[activeTittle]}
                            isFetching={isFetching}
            />
            <hr/>
            <FutureWeather setActive={setActiveTittle} active={activeTittle}
                           futureWeather={weather?.forecast.forecastday} isFetching={isFetching}
            />
            <hr/>
            <p className={s.powered}>
                Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
            </p>
        </div>
    );
}
export default App;
