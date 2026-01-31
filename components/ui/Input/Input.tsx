import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export function Input({ label, helperText, error, id, className, ...rest }: Props) {
  const inputId = id ?? rest.name ?? undefined;

  return (
    <div className={[styles.wrap, className ?? ""].filter(Boolean).join(" ")}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={[styles.input, error ? styles.inputError : ""].filter(Boolean).join(" ")}
        {...rest}
      />

      {error ? (
        <div className={styles.error}>{error}</div>
      ) : helperText ? (
        <div className={styles.helper}>{helperText}</div>
      ) : null}
    </div>
  );
}
