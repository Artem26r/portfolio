import { BehanceStaticFyApiAdobe } from "components/BehanceStaticFyAPIAdobe";
import { DashboardWrapperBig } from "components/DashboardComponents/DashboardWrapperBig";
import { DashboardWrapperMedium } from "components/DashboardComponents/DashboardWrapperMedium";
import { DashboardWrapperSmall } from "components/DashboardComponents/DashboardWrapperSmall";
import { GitApiNext } from "components/GitApiNext";
import { LinksDashboard } from "components/LinksDashboard";
import { SkillsDashboard } from "components/SkillsDashboard";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardWrapperBig classNameGrid={"lg-1"}>
        <BehanceStaticFyApiAdobe
          count={723}
          title="Просмотры"
          linkName="Behance"
          url="https://www.behance.net/artemkrave2003"
        />
      </DashboardWrapperBig>
      <DashboardWrapperMedium classNameGrid={"md-1"}>
        <BehanceStaticFyApiAdobe
          count={145}
          title="Оценки"
          linkName="Behance"
          url="https://www.behance.net/artemkrave2003"
        />
      </DashboardWrapperMedium>
      <DashboardWrapperMedium classNameGrid={"md-2"}>
        <BehanceStaticFyApiAdobe
          count={22}
          title="Подписчики"
          linkName="Behance"
          url="https://www.behance.net/artemkrave2003"
        />
      </DashboardWrapperMedium>{" "}
      <DashboardWrapperMedium classNameGrid={"md-3"}>
        <GitApiNext
          count={22}
          title="Репозитории"
          linkName="Git"
          url="https://github.com/Artem26r"
        />
      </DashboardWrapperMedium>
      <DashboardWrapperMedium classNameGrid={"md-4"}>
        <GitApiNext
          count={22}
          title="Звезды"
          linkName="Git"
          url="https://github.com/Artem26r"
        />
      </DashboardWrapperMedium>
      <DashboardWrapperBig classNameGrid={"lg-2"}>
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
      </DashboardWrapperBig>
      <DashboardWrapperBig classNameGrid={"lg-3"}>
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
        <SkillsDashboard title="JS" disc="TS" />
      </DashboardWrapperBig>
      <DashboardWrapperSmall classNameGrid={"sm-1"}>
        <LinksDashboard
          url="https://www.behance.net/artemkrave2003"
          linkName="Behance"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-2"}>
        <LinksDashboard
          url="https://www.behance.net/artemkrave2003"
          linkName="Behance"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-3"}>
        <LinksDashboard
          url="https://www.behance.net/artemkrave2003"
          linkName="Behance"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-4"}>
        <LinksDashboard
          url="https://www.behance.net/artemkrave2003"
          linkName="Behance"
        />
      </DashboardWrapperSmall>
    </div>
  );
};
