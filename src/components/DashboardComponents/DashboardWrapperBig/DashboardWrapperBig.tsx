import { ReactNode } from "react";
import styles from "./DashboardWrapperBig.module.scss";

interface DashboardWrapperBigProps {
  children: ReactNode;
  classNameGrid?: string;
}

export const DashboardWrapperBig = ({
  children,
  classNameGrid,
}: DashboardWrapperBigProps) => {
  return (<div className={`${styles.dashboardWrapperBig} ${styles[classNameGrid!]}`}>{children}</div>);
};
