import { useTranslation } from "react-i18next";
import { Input } from "../../../../components/ui/Input/Input";
import { StepActions } from "../components/StepActions";
import styles from "./Steps.module.css";

type Props = {
  email: string;
  phone: string;
  onChange: (partial: { email?: string; phone?: string }) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
};


export function ContactStep({ email, phone, onChange, onBack, onSubmit, isSubmitting }: Props) {
  const { t } = useTranslation("survey");
  const emailOk = email.trim().includes("@");

  return (
    <div className={styles.step}>
      <h2 className={styles.h2}>{t("contact.title")}</h2>
      <p className={styles.p}>{t("contact.help")}</p>

      <div className={styles.form}>
        <Input
          label={t("contact.email")}
          value={email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="naam@bedrijf.be"
        />
        <Input
          label={t("contact.phone")}
          value={phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="(optioneel)"
        />
        <p className={styles.mini}>{t("contact.note")}</p>
      </div>

      <StepActions
  onBack={onBack}
  onNext={onSubmit}
  nextLabel={isSubmitting ? t("contact.submitting", { defaultValue: "Verzenden…" }) : t("contact.submit")}
  nextDisabled={!emailOk || !!isSubmitting}
/>

    </div>
  );
}
