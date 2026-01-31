export type SurveyRole =
  | "solo"
  | "owner"
  | "employee"
  | "site_manager"
  | "other";

export type SurveyClientCount = "1_5" | "6_15" | "16_30" | "30_plus";

export type SurveyChannel =
  | "whatsapp"
  | "phone_sms"
  | "email"
  | "messenger"
  | "mixed"
  | "other";

export type SurveyFrustration =
  | "too_many_places"
  | "repeating_questions"
  | "misunderstandings"
  | "outside_hours"
  | "mental_load"
  | "no_overview";

export type AssistInterest = "yes" | "maybe" | "no";

export type SurveyAnswers = {
  role?: SurveyRole;
  clientCount?: SurveyClientCount;
  channels: SurveyChannel[];
  frustrations: SurveyFrustration[];
  assistInterest?: AssistInterest;

  betaInterest?: BetaInterest;
  betaMotivation?: string;

  email?: string;
  phone?: string;
};

export type StepId =
  | "intro"
  | "role"
  | "scale"
  | "channels"
  | "frustrations"
  | "assist"
  | "contact"
  | "beta"    
  | "thanks";


export type BetaInterest = "yes" | "no";

