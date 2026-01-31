import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "../../../../components/ui/Container/Container";
import { Button } from "../../../../components/ui/Button/Button";
import styles from "./Hero.module.css";
import { HeroAssistPreview } from "./HeroAssistPreview";


export function Hero() {
  const { t } = useTranslation("landing");
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />
      <Container size="lg">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.subtitle}>{t("hero.subtitle")}</p>

            <div className={styles.ctaRow}>
              <Button
                fullWidth
                className={styles.ctaMobile}
                onClick={() => navigate("/interesse")}
              >
                {t("hero.cta")}
              </Button>

              <Button
                variant="secondary"
                className={styles.ctaDesktop}
                onClick={() => navigate("/interesse")}
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            <p className={styles.note}>{t("hero.note")}</p>
          </div>

          <div className={styles.right}>
            <HeroAssistPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
