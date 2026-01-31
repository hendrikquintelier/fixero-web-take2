import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroAssistPreview.module.css";

type Msg = { from: "client" | "pro"; text: string; time: string };
type Chip = { label: string; value: string };

type Screen = {
  id: string;
  tag: string;
  title: string;
  meta: string;
  thread: Msg[];
  suggestions: { text: string; chips?: Chip[] }[];
};

export function HeroAssistPreview() {
  const { t } = useTranslation("landing");
  const screens = t("heroAssist.screens", { returnObjects: true }) as Screen[];

  const [idx, setIdx] = useState(0);
  const current = useMemo(() => screens[idx], [screens, idx]);

  const canLeft = idx > 0;
  const canRight = idx < screens.length - 1;

  function prev() {
    setIdx((i) => Math.max(0, i - 1));
  }

  function next() {
    setIdx((i) => Math.min(screens.length - 1, i + 1));
  }

  if (!current) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.phone}>
        <div className={styles.phoneTop}>
          <div className={styles.notch} aria-hidden />
          <div className={styles.brand}>
            <span className={styles.brandName}>Fixero</span>
            <span className={styles.brandBadge}>{t("heroAssist.badge")}</span>
          </div>
        </div>

        {/* arrows (always desktop-visible) */}
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          disabled={!canLeft}
          aria-label="Previous scenario"
        >
          ‹
        </button>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          disabled={!canRight}
          aria-label="Next scenario"
        >
          ›
        </button>

        {/* single screen */}
        <div className={styles.screen}>
          <div className={styles.screenHeader}>
            <div className={styles.tag}>{current.tag}</div>
            <div className={styles.headerText}>
              <div className={styles.title}>{current.title}</div>
              <div className={styles.meta}>{current.meta}</div>
            </div>
          </div>

          <div className={styles.chat}>
            {current.thread.map((m, i) => (
              <div key={i} className={`${styles.row} ${m.from === "pro" ? styles.right : styles.left}`}>
                <div className={`${styles.bubble} ${m.from === "pro" ? styles.bubblePro : styles.bubbleClient}`}>
                  {m.text}
                </div>
                <div className={styles.time}>{m.time}</div>
              </div>
            ))}
          </div>

          <div className={styles.assist}>
            <div className={styles.assistTop}>
              <div className={styles.assistTitle}>{t("heroAssist.assistTitle")}</div>
              <div className={styles.assistSub}>{t("heroAssist.assistSub")}</div>
            </div>

            <div className={styles.suggestions}>
              {current.suggestions.slice(0, 2).map((sg, i) => (
                <div key={i} className={styles.suggestion}>
                  {sg.chips?.length ? (
                    <div className={styles.chips}>
                      {sg.chips.map((c, k) => (
                        <div key={k} className={styles.chip}>
                          <span className={styles.chipLabel}>{c.label}:</span>
                          <span className={styles.chipValue}>{c.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className={styles.sText}>{sg.text}</div>
                </div>
              ))}
            </div>

            <div className={styles.note}>{t("heroAssist.note")}</div>
          </div>
        </div>

        {/* dots */}
        <div className={styles.dots} aria-hidden>
          {screens.map((_, i) => (
            <span key={i} className={i === idx ? styles.dotActive : ""} />
          ))}
        </div>
      </div>

    </div>
  );
}
