import { useTranslation } from "react-i18next";
import type { SurveyChannel } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  value: SurveyChannel[];
  onChange: (v: SurveyChannel[]) => void;
  onBack: () => void;
  onNext: () => void;
};

export function ChannelsStep({ value, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");
  const options = t("channels.options", { returnObjects: true }) as { id: SurveyChannel; label: string }[];

  function toggle(id: SurveyChannel) {
    if (value.includes(id)) onChange(value.filter((x) => x !== id));
    else onChange([...value, id]);
  }

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("channels.title")}</h2>
      <p className={styles.p}>{t("channels.help")}</p>

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
