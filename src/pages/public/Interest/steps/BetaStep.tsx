import { useTranslation } from "react-i18next";
import type { BetaInterest } from "../flow/survey.types";
import { OptionCard } from "../components/OptionCard";
import { StepActions } from "../components/StepActions";
import { Input } from "../../../../components/ui/Input/Input";
import styles from "./Steps.module.css";

type Props = {
  value?: BetaInterest;
  motivation: string;
  onChange: (v: { betaInterest?: BetaInterest; betaMotivation?: string }) => void;
  onBack: () => void;
  onNext: () => void;
};

export function BetaStep({ value, motivation, onChange, onBack, onNext }: Props) {
  const { t } = useTranslation("survey");

  const options = t("beta.options", { returnObjects: true }) as { id: BetaInterest; label: string; desc?: string }[];

  const showMotivation = value === "yes";

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("beta.title")}</h2>
      <p className={styles.p}>{t("beta.help")}</p>

      <div className={styles.list}>
        {options.map((o) => (
          <OptionCard
            key={o.id}
            title={o.label}
            description={o.desc}
            selected={value === o.id}
            onClick={() => onChange({ betaInterest: o.id })}
          />
        ))}
      </div>

      {showMotivation && (
        <div className={styles.form}>
          {/* als jullie Input component geen textarea ondersteunt, gebruik een simpele textarea (zie alternatief hieronder) */}
          <Input
            label={t("beta.motivationLabel")}
            value={motivation}
            onChange={(e) => onChange({ betaMotivation: e.target.value })}
            placeholder={t("beta.motivationPlaceholder")}
          />
          <p className={styles.mini}>{t("beta.motivationNote")}</p>
        </div>
      )}

      <StepActions
        onBack={onBack}
        onNext={onNext}
        nextLabel={t("beta.submit")}
        nextDisabled={!value || (value === "yes" && motivation.trim().length < 10)}
      />
    </div>
  );
}
