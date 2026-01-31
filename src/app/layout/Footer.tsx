import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container/Container";
import styles from "./footer.module.css";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className={styles.inner}>
          <span>© {new Date().getFullYear()} Fixero</span>
          <div className={styles.links}>
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.terms")}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
