import { useTranslation } from "react-i18next";
import type { SurveyFrustration } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  value: SurveyFrustration[];
  onChange: (v: SurveyFrustration[]) => void;
  onBack: () => void;
  onNext: () => void;
};

const MAX = 2;

export function FrustrationsStep({ value, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");
  const options = t("frustrations.options", { returnObjects: true }) as { id: SurveyFrustration; label: string }[];

  function toggle(id: SurveyFrustration) {
    if (value.includes(id)) onChange(value.filter((x) => x !== id));
    else {
      if (value.length >= MAX) return;
      onChange([...value, id]);
    }
  }

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("frustrations.title")}</h2>
      <p className={styles.p}>{t("frustrations.help", { max: MAX })}</p>

      <div className={styles.list}>
        {options.map((o) => (
          <OptionCard
            key={o.id}
            title={o.label}
            selected={value.includes(o.id)}
            onClick={() => toggle(o.id)}
            right={value.includes(o.id) ? "✓" : undefined}
          />
        ))}
      </div>

      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel={t("common.next")}
        nextDisabled={value.length === 0}
      />
    </div>
  );
}
