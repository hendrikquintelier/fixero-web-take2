import styles from "./landing.module.css";
import { Hero } from "./sections/Hero";
import { ValueProps } from "./sections/ValueProps";


export function LandingPage() {
  return (
    <div className={styles.page}>
      <Hero />
      <ValueProps />
    </div>
  );
}
