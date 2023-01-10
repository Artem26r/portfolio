import { ThemeSwitcher } from "components/ThemeSwitcher";
import { NavLink } from "react-router-dom";
import styles from "./TheHeader.module.scss";

export const TheHeader = () => {

  return (
    <div className={styles.theHeader}>
      <span className={styles.logo}>Артём Кравец</span>
      <div className={styles.rightHeader}>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
            to="/works"
          >
            Проекты
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
            to="/dashboard"
          >
            Дашборд
          </NavLink>
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
