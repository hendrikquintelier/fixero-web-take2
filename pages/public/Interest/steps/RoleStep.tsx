import { useTranslation } from "react-i18next";
import type { SurveyRole } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  value?: SurveyRole;
  onChange: (v: SurveyRole) => void;
  onBack: () => void;
  onNext: () => void;
};

export function RoleStep({ value, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");
  const options = t("role.options", { returnObjects: true }) as { id: SurveyRole; label: string }[];

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("role.title")}</h2>
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
