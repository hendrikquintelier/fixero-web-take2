import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/Button/Button";
import styles from "./Steps.module.css";

type Props = { onNext: () => void };

export function IntroStep({ onNext }: Props) {
  const { t } = useTranslation("survey");

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("intro.title")}</h2>
      <p className={styles.p}>{t("intro.text")}</p>

      <div className={styles.singleCta}>
        <Button fullWidth onClick={onNext}>
          {t("intro.cta")}
        </Button>
      </div>

      <p className={styles.mini}>{t("intro.note")}</p>
    </div>
  );
}
