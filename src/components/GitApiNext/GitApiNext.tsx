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
      <div>{count}</div>
      <div>{title}</div>
    </div>
    <a href={url}>{linkName}</a>
  </div>
);
