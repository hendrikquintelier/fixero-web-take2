import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/ui/Button/Button";
import styles from "./Steps.module.css";

type Props = { onRestart: () => void };

export function ThankYouStep({ onRestart }: Props) {
  const { t } = useTranslation("survey");

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("thanks.title")}</h2>
      <p className={styles.p}>{t("thanks.text")}</p>

      <div className={styles.singleCta}>
        <Button variant="secondary" fullWidth onClick={onRestart}>
          {t("thanks.backToStart")}
        </Button>
      </div>
    </div>
  );
}
