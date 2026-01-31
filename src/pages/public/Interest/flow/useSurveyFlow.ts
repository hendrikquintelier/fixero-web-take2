import { useMemo, useState } from "react";
import type { StepId, SurveyAnswers } from "./survey.types";

const ORDER: StepId[] = [
  "intro",
  "role",
  "scale",
  "channels",
  "frustrations",
  "assist",
  "beta",
  "contact",
  "thanks",
];


export function useSurveyFlow() {
  const [step, setStep] = useState<StepId>("intro");
  const [answers, setAnswers] = useState<SurveyAnswers>({
    channels: [],
    frustrations: [],
  });

  const stepIndex = useMemo(() => ORDER.indexOf(step), [step]);
  const isLast = step === "thanks";
  const isFirst = step === "intro";

  function goNext() {
    setStep((s) => ORDER[Math.min(ORDER.indexOf(s) + 1, ORDER.length - 1)]);
  }

  function goBack() {
    setStep((s) => ORDER[Math.max(ORDER.indexOf(s) - 1, 0)]);
  }

  function set<K extends keyof SurveyAnswers>(key: K, value: SurveyAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function merge(partial: Partial<SurveyAnswers>) {
    setAnswers((prev) => ({ ...prev, ...partial }));
  }

  function reset() {
    setAnswers({ channels: [], frustrations: [] });
    setStep("intro");
  }

  return {
    step,
    stepIndex,
    totalSteps: ORDER.length - 2, // exclude intro & thanks from "question count"
    isFirst,
    isLast,
    answers,
    set,
    merge,
    goNext,
    goBack,
    setStep,
    reset,
  };
}
