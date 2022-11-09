import React from 'react';
import Grid from "@mui/material/Grid";
import style from '../styled/StackCards.module.css'

type StackType = {
    id: string
    title: string
    description: string
    src: string
}

type PropsType = {
    Stack:Array<StackType>
}

export const StackCards = (props:PropsType) => {
    return (
        <Grid container
              padding={'3rem 0'}
              className={style.blockMobile}>

        </Grid>
    );
};
