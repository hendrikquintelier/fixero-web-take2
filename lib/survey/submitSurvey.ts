import type { SurveyAnswers } from "../../pages/public/Interest/flow/survey.types";
import i18n from "../../i18n/i18n"; // <-- pas dit pad aan naar jouw i18n init file

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;

function getLocale(): string {
  // Prefer resolvedLanguage (bv "nl-BE"), fallback to language (bv "nl")
  const l = (i18n as any)?.resolvedLanguage || i18n.language || "nl";
  return String(l || "nl");
}

export async function submitSurvey(answers: SurveyAnswers): Promise<boolean> {
  if (!SUPABASE_URL) throw new Error("Missing VITE_SUPABASE_URL");

  const base = SUPABASE_URL.replace(/\/$/, "");
  const url = `${base}/functions/v1/submit-survey`;

  const locale = getLocale();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: (answers.email ?? "").trim(),
      locale,
      source: "prelaunch",
      hp: "",
      answers: {
        role: answers.role ?? null,
        clientCount: answers.clientCount ?? null,
        channels: answers.channels ?? [],
        frustrations: answers.frustrations ?? [],
        assistInterest: answers.assistInterest ?? null,
        betaInterest: answers.betaInterest ?? null,
        betaMotivation: answers.betaMotivation ?? null,
        phone: answers.phone ?? null,
      },
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("submit-survey failed", res.status, text);
    return false;
  }

  try {
    const json = JSON.parse(text);
    return json?.ok === true;
  } catch {
    return true;
  }
}
