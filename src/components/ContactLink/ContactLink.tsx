import styles from "./ContactLink.module.scss";

export interface ContactLinkProps {
  text: string;
  url: string;
}

export const ContactLink = ({ text, url }: ContactLinkProps) => (
  <a className={styles.contactLink} rel="noreferrer" href={url} target="_blank">
    &#45; <span>{text}</span>
  </a>
);
