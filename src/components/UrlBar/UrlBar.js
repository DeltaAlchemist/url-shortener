import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import useStyles from './UrlBar.style';

const UrlBar = () => {

    const classes = useStyles();

    return(
        <Paper
            component="form"
            elevation={0}
            className={classes.paper}
            sx={{ display: 'flex', alignItems: 'center', width: 800 }}
        >
            <TextField
                id="standard-search"
                label="Insira sua URL"
                type="search"
                variant="standard"
                sx={{ width: 800 }}
            />
            <Button variant="contained">Shorten</Button>
        </Paper>  
    );

};

export default UrlBar;