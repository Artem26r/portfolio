import style from '../styled/Resume.module.css'
import React from 'react';


export const Resume = () => {
    return (
        <div className={style.block}>
            <div className={style.img}></div>
            <div>
                <div>
                    <h2>Умею</h2>
                    <p>— верстать сайты и лендинги по макетам, одностраничные web-приложения, создавать элементы и блоки без макета, соблюдая стилистику сайта или приложения;</p>
                    <p>— работать с обработчиками событий в <span>JS</span>, управлять состоянием приложения в <span>React</span> и <span>Redux</span>;</p>
                    <p>— создавать страницы, комфортные для просмотра и взаимодействия на любом экране и устройстве, в любом браузере, не забывая и о <span>IE11</span> (добавлять префиксы,полифилы, транспилировать код);</p>
                    <p>— взаимодействовать с различными <span>API</span>, используя <span>GET</span> и <span>POST</span> запросы;</p>
                    <p>— подключать дополнительные библиотеки в виде <span>css</span> и <span>js</span> файлов, <span>npm-пакетов</span>;</p>
                    <p>— соблюдать кодстайл, писать понятный и <span>легкий для прочтения код</span>;</p>
                    <p>— читать документацию на английском языке;</p>
                    <p>— верстать адаптивную, валидную, кросс-браузерную верстку;</p>
                    <p>— работать с графическими редакторами <span>Figma</span>, <span>Photoshop</span>;</p>
                    <p>— работать с системами контроля версий (<span>git</span>);</p>
                    <p>— разрабатывать анимации, работать с <span>SVG</span>;– работать с <span>Wordpress</span>, <span>MODX</span>.</p>
                </div>
                <div>
                    <h2>Владею</h2>
                    <p>— JavaScript</p>
                    <p>— React</p>
                    <p>— Redux</p>
                    <p>— TypeScript</p>
                    <p>— HTML</p>
                    <p>— CSS</p>
                    <p>— Git</p>
                    <p>— MUI</p>
                    <p>— MODX</p>
                    <p>— SEO</p>
                    <p>— Адаптивная верстка</p>
                    <p>— Основы UI/UX</p>
                    <p>— Figma</p>
                    <p>— Photoshop</p>
                </div>
                <div>
                    <h2>Контакты</h2>
                    <a href="">— Git</a>
                    <a href="">— Linkedin</a>
                    <a href="">— Email</a>
                    <a href="">— Telegram</a>
                </div>
            </div>
        </div>
    );
};
