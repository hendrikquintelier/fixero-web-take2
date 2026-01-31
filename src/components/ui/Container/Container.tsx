import type { ReactNode } from "react";
import styles from "./Container.module.css";

type Props = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Container({ children, size = "sm" }: Props) {
  return <div className={`${styles.container} ${styles[size]}`}>{children}</div>;
}
