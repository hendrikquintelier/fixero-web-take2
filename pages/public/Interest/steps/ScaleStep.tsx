import { useTranslation } from "react-i18next";
import type { SurveyClientCount } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  value?: SurveyClientCount;
  onChange: (v: SurveyClientCount) => void;
  onBack: () => void;
  onNext: () => void;
};

export function ScaleStep({ value, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");
  const options = t("scale.options", { returnObjects: true }) as { id: SurveyClientCount; label: string }[];

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("scale.title")}</h2>
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
