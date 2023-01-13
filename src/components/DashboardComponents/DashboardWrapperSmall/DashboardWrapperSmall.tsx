import { ReactNode } from "react";
import styles from "./DashboardWrapperSmall.module.scss";

interface DashboardWrapperSmallProps {
  children: ReactNode;
  classNameGrid?: string;
}

export const DashboardWrapperSmall = ({
  children,
  classNameGrid,
}: DashboardWrapperSmallProps) => {
  return (<div className={`${styles.dashboardWrapperSmall} ${classNameGrid ? styles[classNameGrid!] : ''}`}>{children}</div>);
};
