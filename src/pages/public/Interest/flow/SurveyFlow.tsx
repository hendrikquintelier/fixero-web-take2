import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../../../../components/ui/Card/Card";
import styles from "./SurveyFlow.module.css";
import { useSurveyFlow } from "./useSurveyFlow";

import { ProgressBar } from "../components/ProgressBar";
import { IntroStep } from "../steps/IntroStep";
import { RoleStep } from "../steps/RoleStep";
import { ScaleStep } from "../steps/ScaleStep";
import { ChannelsStep } from "../steps/ChannelsStep";
import { FrustrationsStep } from "../steps/FrustrationsStep";
import { AssistInterestStep } from "../steps/AssistInterestStep";
import { ContactStep } from "../steps/ContactStep";
import { BetaStep } from "../steps/BetaStep";
import { ThankYouStep } from "../steps/ThankYouStep";

import { submitSurvey } from "../../../../lib/survey/submitSurvey";

export function SurveyFlow() {
  const { t } = useTranslation("survey");
  const flow = useSurveyFlow();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState(false);

  const showProgress = flow.step !== "intro" && flow.step !== "thanks";

  async function handleSubmitContact() {
    setSubmitError(null);
    setSubmitOk(false);

    const email = (flow.answers.email ?? "").trim();
    if (!email) {
      setSubmitError(
        t("errors.emailRequired", { defaultValue: "Vul je e-mailadres in." })
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const ok = await submitSurvey(flow.answers);

      if (!ok) {
        setSubmitError(
          t("errors.generic", { defaultValue: "Er ging iets mis. Probeer opnieuw." })
        );
        return;
      }

      setSubmitOk(true);
      setTimeout(() => flow.goNext(), 400); // show success briefly, then go to "beta"
    } catch {
      setSubmitError(
        t("errors.generic", { defaultValue: "Er ging iets mis. Probeer opnieuw." })
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className={styles.card}>
      {showProgress && (
        <div className={styles.progressWrap}>
          <ProgressBar
            current={Math.max(flow.stepIndex - 1, 1)}
            total={flow.totalSteps}
            label={t("progress.label", {
              current: Math.max(flow.stepIndex - 1, 1),
              total: flow.totalSteps,
            })}
          />
        </div>
      )}

      <div className={styles.body}>
        {flow.step === "intro" && <IntroStep onNext={flow.goNext} />}

        {flow.step === "role" && (
          <RoleStep
            value={flow.answers.role}
            onChange={(v) => flow.set("role", v)}
            onNext={flow.goNext}
            onBack={flow.goBack}
          />
        )}

        {flow.step === "scale" && (
          <ScaleStep
            value={flow.answers.clientCount}
            onChange={(v) => flow.set("clientCount", v)}
            onNext={flow.goNext}
            onBack={flow.goBack}
          />
        )}

        {flow.step === "channels" && (
          <ChannelsStep
            value={flow.answers.channels}
            onChange={(v) => flow.set("channels", v)}
            onNext={flow.goNext}
            onBack={flow.goBack}
          />
        )}

        {flow.step === "frustrations" && (
          <FrustrationsStep
            value={flow.answers.frustrations}
            onChange={(v) => flow.set("frustrations", v)}
            onNext={flow.goNext}
            onBack={flow.goBack}
          />
        )}

        {flow.step === "assist" && (
          <AssistInterestStep
            value={flow.answers.assistInterest}
            onChange={(v) => flow.set("assistInterest", v)}
            onNext={flow.goNext}
            onBack={flow.goBack}
          />
        )}

        {flow.step === "beta" && (
          <BetaStep
            value={flow.answers.betaInterest}
            motivation={flow.answers.betaMotivation ?? ""}
            onChange={(partial) => flow.merge(partial)}
            onBack={flow.goBack}
            onNext={flow.goNext}
          />
        )}

        {flow.step === "contact" && (
          <>
            <ContactStep
              email={flow.answers.email ?? ""}
              phone={flow.answers.phone ?? ""}
              onChange={(partial) => flow.merge(partial)}
              onSubmit={handleSubmitContact}
              onBack={flow.goBack}
              isSubmitting={isSubmitting}
            />

            {submitError && <div className={styles.error}>{submitError}</div>}
            {submitOk && (
              <div className={styles.ok}>
                ✅ {t("contact.sent", { defaultValue: "Verzonden!" })}
              </div>
            )}
            {isSubmitting && (
              <div className={styles.submitting}>
                {t("common.loading", { defaultValue: "Even wachten…" })}
              </div>
            )}
          </>
        )}

        

        {flow.step === "thanks" && <ThankYouStep onRestart={flow.reset} />}
      </div>
    </Card>
  );
}
