import styles from "./SkillsDashboard.module.scss";

interface SkillsDashboardProps {
  title: string;
  disc: string
}

export const SkillsDashboard = ({title, disc}: SkillsDashboardProps) => (
  <div className={styles.skillsDashboard}>
    <div>{title}</div>
    <div>{disc}</div>
  </div>
);
