import styles from "./LinksDashboard.module.scss";
import { ReactComponent as ArrowIcon } from "assets/icon-arrow.svg";

interface LinksDashboardProps {
  url: string;
  linkName: string;
}

export const LinksDashboard = ({ url, linkName }: LinksDashboardProps) => (
  <a href={url} className={styles.linksDashboard}>
    {linkName}
    <ArrowIcon />
  </a>
);
