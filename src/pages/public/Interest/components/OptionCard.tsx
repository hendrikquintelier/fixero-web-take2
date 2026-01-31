import type { ReactNode } from "react";
import styles from "./OptionCard.module.css";

type Props = {
  title: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
  right?: ReactNode;
};

export function OptionCard({ title, description, selected, onClick, right }: Props) {
  return (
    <button
      type="button"
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        {description ? <div className={styles.desc}>{description}</div> : null}
      </div>
      {right ? <div className={styles.right}>{right}</div> : null}
    </button>
  );
}
