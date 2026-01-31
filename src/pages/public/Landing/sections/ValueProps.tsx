import { useTranslation } from "react-i18next";
import { Container } from "../../../../components/ui/Container/Container";
import styles from "./ValueProps.module.css";

type Item = { title: string; body: string };

export function ValueProps() {
  const { t } = useTranslation("landing");
  const items = t("valueProps.items", { returnObjects: true }) as Item[];

  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
