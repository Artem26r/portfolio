import styles from "./Image.module.scss";
import { ReactComponent as ImgHome } from "assets/home-image.svg";

export const Image = () => (
  <div className={styles.image}>
    <ImgHome />
  </div>
);
