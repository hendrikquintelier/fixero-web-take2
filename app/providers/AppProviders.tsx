import type { ReactNode } from "react";
import "../../design/styles/globals.css";
import "../../i18n/i18n";

export function AppProviders({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
