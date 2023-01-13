import styles from "./BehanceStaticFyAPIAdobe.module.scss";

interface BehanceStaticFyApiAdobeProps {
  count: number;
  title: string;
  linkName: string;
  url: string;
}

export const BehanceStaticFyApiAdobe = ({
  count,
  title,
  linkName,
  url,
}: BehanceStaticFyApiAdobeProps) => (
  <div className={styles.behanceStaticFyApiAdobe}>
    <div>
      <div className={styles.count}>{count}</div>
      <div className={styles.title}>{title}</div>
    </div>
    <a className={styles.link} href={url}>{linkName}</a>
  </div>
);
