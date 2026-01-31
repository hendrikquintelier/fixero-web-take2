import styles from "./ProgressBar.module.css";

type Props = {
  current: number;
  total: number;
  label: string;
};

export function ProgressBar({ current, total, label }: Props) {
  const pct = total <= 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>{label}</div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
