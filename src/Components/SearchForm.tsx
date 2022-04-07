import React from "react";
import {useFormik} from "formik";
import s from '../App.module.scss'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function validationChecker(values: ValuesType) {
    let errors: ValuesType = {};
    if (!values.location) {
        errors.location = 'Required!'
    }
    return errors;
}

type PropsType = {
    setSearchParams: (s: string) => void
    params: string
}
export const SearchForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            location: props.params,
        },
        validate: validationChecker,
        onSubmit: (values) => {
            props.setSearchParams(values.location)
        },
    });

    return (
        <form className={s.searchForm} onSubmit={formik.handleSubmit}>
            <div className={s.searchItem}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    id="location"
                    name="location"
                    placeholder='Another location'
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                />
            </div>
            <div className={s.searchButton}>
                <Button size={'large'} disabled={props.params === formik.values.location}
                        color="primary"
                        variant="contained"
                        type="submit"
                >
                    Submit
                </Button>
            </div>
        </form>
    )
}

type ValuesType = {
    location?: string
}
