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
            <h2 className={style.StackCardsTitle}>Мой <span>стэк</span></h2>
            <Grid container
                  justifyContent={'space-between'}>
                {
                    props.Stack.map(el => {
                        return (
                            <div className={style.StackCardsItems} key={el.id}>
                                <img src={el.src} alt=""/>
                                <div className={style.StackCardsItemsTitle}>{el.title}</div>
                                <div>{el.description}</div>
                            </div>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
};
