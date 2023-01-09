import { ThemeSwitcher } from "components/ThemeSwitcher";
import { NavLink } from "react-router-dom";
import styles from "./TheHeader.module.scss";

export const TheHeader = () => {

  let activeClassName = styles.active;

  return (
    <div className={styles.theHeader}>
      <span className={styles.logo}>Артём Кравец</span>
      <div className={styles.rightHeader}>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/dashboard"
          >
            Дашборд
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/works"
          >
            Проекты
          </NavLink>
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
