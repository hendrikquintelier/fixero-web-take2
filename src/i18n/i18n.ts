import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nlCommon from "./locales/nl/common.json";
import nlLanding from "./locales/nl/landing.json";
import nlSurvey from "./locales/nl/survey.json"; // ✅

import frCommon from "./locales/fr/common.json";
import frLanding from "./locales/fr/landing.json";
import frSurvey from "./locales/fr/survey.json"; // ✅

import enCommon from "./locales/en/common.json";
import enLanding from "./locales/en/landing.json";
import enSurvey from "./locales/en/survey.json"; // ✅

i18n.use(initReactI18next).init({
  resources: {
    nl: { common: nlCommon, landing: nlLanding, survey: nlSurvey }, // ✅
    fr: { common: frCommon, landing: frLanding, survey: frSurvey }, // ✅
    en: { common: enCommon, landing: enLanding, survey: enSurvey }, // ✅
  },
  lng: "nl",
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common", "landing", "survey"],
  interpolation: { escapeValue: false },
});

export default i18n;
