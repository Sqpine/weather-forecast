import {SyntheticEvent, useEffect, useState} from "react";
import {IconButton} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

type PropsType = {
    error: string | null
}
export const SnackbarInfo = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>()

    useEffect(() => {
        const active = !!props.error
        setOpen(active)
    }, [props.error])

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="error"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </>
    );

    return (
        <Snackbar
            color={'error'}
            open={open}
            onClose={handleClose}
            message={props.error}
            action={action}
        />
    );
}