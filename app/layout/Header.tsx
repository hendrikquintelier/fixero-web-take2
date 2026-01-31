import { useTranslation } from "react-i18next";
import { Container } from "../../components/ui/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import mark from "../../assets/brand/fixero-namev2.svg";
import styles from "./header.module.css";

import { useNavigate } from "react-router-dom";


export function Header() {
  const { i18n, t } = useTranslation("common");
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img src={mark} alt="Fixero" className={styles.logo} onClick={() => navigate("/")} />
          </div>

          <div className={styles.right}>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={styles.lang}
              aria-label="Language"
            >
              <option value="nl">NL</option>
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>

            <Button variant="primary" className={styles.cta} onClick={() => navigate("/interesse")}>
            {t("nav.earlyAccess")}
            </Button>

          </div>
        </div>
      </Container>
    </header>
  );
}
