import styles from "./GitApiNext.module.scss";

interface GitApiNextProps {
  count: number;
  title: string;
  linkName: string;
  url: string;
}

export const GitApiNext = ({
  count,
  title,
  linkName,
  url,
}: GitApiNextProps) => (
  <div className={styles.gitApiNext}>
    <div>
      <div className={styles.count}>{count}</div>
      <div className={styles.title}>{title}</div>
    </div>
    <a className={styles.link} href={url}>{linkName}</a>
  </div>
);
