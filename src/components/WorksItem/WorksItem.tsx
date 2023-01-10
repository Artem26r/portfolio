import styles from "./WorksItem.module.scss";
import { ReactComponent as ArrowIcon } from "assets/icon-arrow.svg";

interface WorksItemProps {
  name: string;
  tag: string;
  url: string;
}

export const WorksItem = ({ name, tag, url }: WorksItemProps) => (
  <a className={styles.worksItem} rel="noreferrer" href={url} target="_blank">
    <span className={styles.worksItemTxt}>
      <span className={styles.itemTxtName}>{name}</span>
      <span className={styles.itemTxtTag}>{tag}</span>
    </span>
    <ArrowIcon />
  </a>
);
