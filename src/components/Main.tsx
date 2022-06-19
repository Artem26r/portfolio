import Grid from '@mui/material/Grid';
import React from 'react';
import style from '../styled/Main.module.css'

type LinkType = {
    id: string
    url: string
    src: string
}

type PropsType = {
    linkSocial:Array<LinkType>
}

export const Main = (props: PropsType) => {
    return (
        <Grid container spacing={2}
              color={'white'}
              padding={'5rem 0'}
              justifyContent={'space-between'}
              borderBottom={'1px solid #444444'}
              className={style.blockColumn}>
            <Grid item xs={6} md={6}
                  justifyContent="flex-end"
                  textAlign={"left"}
                  className={style.textBlockMob}>
                <h2>Привет, <span className={style.spanTitleRed}>меня зовут</span></h2>
                <h1>Артём Кравец</h1>
                <p>В феврале 2019-го устроился в компанию Омега (сеть сервисных центров по России), где занимаюсь версткой сайтов, доработкой кодов и версткой макетов.

                    Не люблю когда нет задач, их отсутствие - слоумо.
                    Люблю вектор, не люблю jquery, люблю веселый коллектив, не люблю токсичность, могу с уверенностью сказать что я люблю свою работу, но не люблю на нее просыпаться (букли поймут).</p>
                <div className={style.socialBlock}>
                    {props.linkSocial.map(el => {
                        return (
                            <a className={style.linkImg} href={el.url} target="_blank">
                                <img src={el.src} alt=""/>
                            </a>
                        )
                    })}
                </div>
            </Grid>
            <Grid item xs={6} md={4}
                  className={style.photoMobile}>
                <div className={style.imgMainRightBlock}>
                    <img src="Art.png" alt="Main"/>
                </div>
            </Grid>
        </Grid>
    );
};
