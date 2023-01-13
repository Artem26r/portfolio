import { ReactNode } from "react";
import styles from "./DashboardWrapperMedium.module.scss";

interface DashboardWrapperMediumProps {
  children: ReactNode;
  classNameGrid?: string;
}

export const DashboardWrapperMedium = ({
  children,
  classNameGrid,
}: DashboardWrapperMediumProps) => {
  return (
    <div
      className={`${styles.dashboardWrapperMedium} ${
        classNameGrid ? styles[classNameGrid!] : ""
      }`}
    >
      {children}
    </div>
  );
};
