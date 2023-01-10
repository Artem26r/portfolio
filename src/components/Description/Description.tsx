import styles from "./Description.module.scss";

export const Description = () => (
  <div className={styles.description}>
    <div className={styles.title}>Умею</div>
    <p>
      &#45; верстать сайты и лендинги по макетам, одностраничные web-приложения,
      создавать элементы и блоки без макета, соблюдая стилистику сайта или
      приложения;
    </p>
    <p>
      &#45; работать с обработчиками событий в <span>JS</span>, управлять
      состоянием приложения в <span>React</span> и <span>Redux</span>;
    </p>
    <p>&#45; создавать страницы, комфортные для просмотра и взаимодействия на любом экране и устройстве, в любом браузере, не забывая и о <span>IE11</span> (добавлять префиксы,полифилы, транспилировать код);</p>
    <p>&#45; взаимодействовать с различными <span>API</span>, используя <span>GET</span> и <span>POST</span> запросы;</p>
    <p>&#45; подключать дополнительные библиотеки в виде <span>css</span> и <span>js</span> файлов, <span>npm-пакетов</span>;</p>
    <p>&#45; соблюдать кодстайл, писать понятный и <span>легкий для прочтения код</span>;</p>
    <p>&#45; читать документацию на английском языке;</p>
    <p>&#45; верстать адаптивную, валидную, кросс-браузерную верстку;</p>
    <p>&#45; работать с графическими редакторами <span>Figma</span>, <span>Photoshop</span>;</p>
    <p>&#45; работать с системами контроля версий (<span>git</span>);</p>
    <p>&#45; азрабатывать анимации, работать с <span>SVG</span>;&#45; работать с <span>Wordpress</span>, <span>MODX</span>.</p>
  </div>
);
