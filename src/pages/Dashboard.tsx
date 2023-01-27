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
          count={737}
          title="Просмотры"
          linkName="Behance"
          url="https://www.behance.net/artemkrave2003"
        />
      </DashboardWrapperBig>
      <DashboardWrapperMedium classNameGrid={"md-1"}>
        <BehanceStaticFyApiAdobe
          count={146}
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
          count={16}
          title="Репозитории"
          linkName="Git"
          url="https://github.com/Artem26r"
        />
      </DashboardWrapperMedium>
      <DashboardWrapperMedium classNameGrid={"md-4"}>
        <GitApiNext
          count={2}
          title="Звезды"
          linkName="Git"
          url="https://github.com/Artem26r"
        />
      </DashboardWrapperMedium>
      <DashboardWrapperBig classNameGrid={"lg-2"}>
        <SkillsDashboard title="JavaScript" disc="ECMAScript 6" />
        <SkillsDashboard title="HTML" disc="Валидная верстка" />
        <SkillsDashboard title="CSS" disc="Sass/modules/MUI" />
        <SkillsDashboard title="SEO" disc="Семантическая верстка" />
      </DashboardWrapperBig>
      <DashboardWrapperBig classNameGrid={"lg-3"}>
        <SkillsDashboard title="React" disc="Функциональный" />
        <SkillsDashboard title="Redux" disc="RTK" />
        <SkillsDashboard title="TypeScript" disc="Not commercial" />
        <SkillsDashboard title="Git" disc="Git Bash" />
      </DashboardWrapperBig>
      <DashboardWrapperSmall classNameGrid={"sm-1"}>
        <LinksDashboard
          url="https://github.com/Artem26r"
          linkName="Git"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-2"}>
        <LinksDashboard
          url="mailto:artem.kravetz@gmail.com"
          linkName="Email"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-3"}>
        <LinksDashboard
          url="https://www.linkedin.com/in/artem-kr"
          linkName="Linkedin"
        />
      </DashboardWrapperSmall>
      <DashboardWrapperSmall classNameGrid={"sm-4"}>
        <LinksDashboard
          url="https://t.me/akerror"
          linkName="Telegram"
        />
      </DashboardWrapperSmall>
    </div>
  );
};
