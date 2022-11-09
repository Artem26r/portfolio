import Grid from '@mui/material/Grid';
import React from 'react';
import style from '../styled/Main.module.css'

// type LinkType = {
//     id: string
//     url: string
//     src: string
// }
//
// type PropsType = {
//     linkSocial:Array<LinkType>
// }

export const Header = () => {
    return (
        <Grid container spacing={2}
              color={'white'}
              padding={'5rem 0'}
              justifyContent={'space-between'}
              borderBottom={'1px solid #444444'}
              className={style.blockColumn}>
        </Grid>
    );
};
