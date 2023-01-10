import { Contacts } from "components/Contacts";
import { Description } from "components/Description";
import { Image } from "components/Image";
import { Skills } from "components/Skills";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return <div className={styles.homePage}>
    <Image />
    <Description />
    <Skills />
    <Contacts />
  </div>;
};
