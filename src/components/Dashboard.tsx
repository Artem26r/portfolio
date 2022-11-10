import style from '../styled/Dashboard.module.css'
import React from 'react';


export const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <div className={style.dashboard_api}>
                <div className={style.dashboard_beh}>
                    <div className={style.xl_card}>
                        <div>
                            <div className={style.card_title}>763 <span>+ 13</span></div>
                            <div className={style.card_subtitle}>Просмотры</div>
                        </div>
                        <a href="">Behance</a>
                    </div>
                    <div>
                        <div className={style.md_card}>
                            <div>
                                <div className={style.card_title}>763 <span>+ 13</span></div>
                                <div className={style.card_subtitle}>Просмотры</div>
                            </div>
                            <a href="">Behance</a>
                        </div>
                        <div className={style.ml_card_fl}>
                            <div className={style.ml_card}>
                                <div>
                                    <div className={style.card_title}>763</div>
                                    <div className={style.card_subtitle}>Просмотры</div>
                                </div>
                                <a href="">Behance</a>
                            </div>
                            <div className={style.ml_card}>
                                <div>
                                    <div className={style.card_title}>763</div>
                                    <div className={style.card_subtitle}>Просмотры</div>
                                </div>
                                <a href="">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.dashboard_git}>
                    <div className={style.md_card}>
                        <div>
                            <div className={style.card_title}>763 <span>+ 13</span></div>
                            <div className={style.card_subtitle}>Просмотры</div>
                        </div>
                        <a href="">Behance</a>
                    </div>
                    <div className={style.md_card}>
                        <div>
                            <div className={style.card_title}>763 <span>+ 13</span></div>
                            <div className={style.card_subtitle}>Просмотры</div>
                        </div>
                        <a href="">Behance</a>
                    </div>
                </div>
            </div>
            <div className={style.dashboard_stat}>
                <div className={style.dashboard_stat_top}>
                    <div className={style.xl_card}>
                        <div className={style.xl_card_item}>
                            <div className={style.xl_card_item_title}>JavaScript</div>
                            <div className={style.xl_card_item_txt}>JavaScript</div>
                        </div>
                        <div className={style.xl_card_item}>
                            <div className={style.xl_card_item_title}>JavaScript</div>
                            <div className={style.xl_card_item_txt}>JavaScript</div>
                        </div>
                        <div className={style.xl_card_item}>
                            <div className={style.xl_card_item_title}>JavaScript</div>
                            <div className={style.xl_card_item_txt}>JavaScript</div>
                        </div>
                        <div className={style.xl_card_item}>
                            <div className={style.xl_card_item_title}>JavaScript</div>
                            <div className={style.xl_card_item_txt}>JavaScript</div>
                        </div>
                    </div>
                    <div className={style.xl_card}>
                    <div className={style.xl_card_item}>
                        <div className={style.xl_card_item_title}>JavaScript</div>
                        <div className={style.xl_card_item_txt}>JavaScript</div>
                    </div>
                    <div className={style.xl_card_item}>
                        <div className={style.xl_card_item_title}>JavaScript</div>
                        <div className={style.xl_card_item_txt}>JavaScript</div>
                    </div>
                    <div className={style.xl_card_item}>
                        <div className={style.xl_card_item_title}>JavaScript</div>
                        <div className={style.xl_card_item_txt}>JavaScript</div>
                    </div>
                    <div className={style.xl_card_item}>
                        <div className={style.xl_card_item_title}>JavaScript</div>
                        <div className={style.xl_card_item_txt}>JavaScript</div>
                    </div>
                </div>
                </div>
                <div className={style.dashboard_stat_top}>
                    <div>
                        <a href="">Git <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L25 1M25 1H1M25 1V25" stroke="#18B7D4" stroke-width="2"/></svg></span></a>
                        <a href="">Git <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L25 1M25 1H1M25 1V25" stroke="#18B7D4" stroke-width="2"/></svg></span></a>
                    </div>
                    <div>
                        <a href="">Git <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L25 1M25 1H1M25 1V25" stroke="#18B7D4" stroke-width="2"/></svg></span></a>
                        <a href="">Git <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 25L25 1M25 1H1M25 1V25" stroke="#18B7D4" stroke-width="2"/></svg></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
