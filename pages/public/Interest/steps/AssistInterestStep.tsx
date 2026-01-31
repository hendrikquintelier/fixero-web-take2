import { useTranslation } from "react-i18next";
import type { AssistInterest } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  value?: AssistInterest;
  onChange: (v: AssistInterest) => void;
  onBack: () => void;
  onNext: () => void;
};

export function AssistInterestStep({ value, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");
  const options = t("assist.options", { returnObjects: true }) as { id: AssistInterest; label: string }[];

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("assist.title")}</h2>
      <p className={styles.p}>{t("assist.help")}</p>

      <div className={styles.list}>
        {options.map((o) => (
          <OptionCard
            key={o.id}
            title={o.label}
            selected={value === o.id}
            onClick={() => onChange(o.id)}
          />
        ))}
      </div>

      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel={t("common.next")}
        nextDisabled={!value}
      />
    </div>
  );
}
