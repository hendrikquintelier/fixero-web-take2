import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...rest }: Props) {
  const classes = [styles.card, className ?? ""].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <div className={styles.title}>{children}</div>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className={styles.body}>{children}</p>;
}
