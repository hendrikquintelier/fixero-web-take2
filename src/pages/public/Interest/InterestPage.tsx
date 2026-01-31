import { useTranslation } from "react-i18next";
import { Container } from "../../../components/ui/Container/Container";
import { SurveyFlow } from "./flow/SurveyFlow";
import styles from "./InterestPage.module.css";

export function InterestPage() {
  const { t } = useTranslation("survey");

  return (
    <main className={styles.page}>
      <Container size="sm">
        <header className={styles.header}>
          <h1 className={styles.h1}>{t("page.title")}</h1>
          <p className={styles.p}>{t("page.subtitle")}</p>
        </header>

        <SurveyFlow />
      </Container>
    </main>
  );
}
