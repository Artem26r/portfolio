import { WorksItem } from "components/WorksItem";
import styles from "./Works.module.scss";

export const Works = () => {
  return (
    <>
      <div className={styles.title}>Мои проекты</div>
      <div className={styles.worksPage}>
        <WorksItem
          name="Countries SPA"
          tag="#TS #React #Redux #CSS"
          url="https://artem26r.github.io/countries-spa/"
        />
        <WorksItem
          name="Git pf card"
          tag="#React #TS #SASS"
          url="https://artem26r.github.io/git-pf-card/"
        />
        <WorksItem
          name="Movie board"
          tag="#React #Mui"
          url="https://artem26r.github.io/movie-board/"
        />
        <WorksItem
          name="Job listings"
          tag="#React #RTK #CSS"
          url="https://artem26r.github.io/joblistings/"
        />
        <WorksItem
          name="Ip tracker"
          tag="#JS #CSS"
          url="https://ip-tracker-lac.vercel.app/"
        />
      </div>
    </>
  );
};
