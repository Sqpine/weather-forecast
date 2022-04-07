import React from "react";
import s from '../App.module.scss'
import CircularProgress from "@mui/material/CircularProgress";
import {SearchForm} from "./SearchForm";

type PropsType = {
    setSearchParams: (s: string) => void
    params: string
    isFetching: boolean
}
export const SearchBar = (props: PropsType) => {

    return (
        <div className={s.header}>
            <div className={s.searchForm}>
                <SearchForm setSearchParams={props.setSearchParams} params={props.params}/>
                {props.isFetching &&
                    <CircularProgress size={'30px'}/>
                }
            </div>
            <div className={s.option}>
                <h3>Current Weather</h3>
                <h3>Temperature changing</h3>
            </div>
        </div>
    )
}