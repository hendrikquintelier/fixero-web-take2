import { Button } from "../../../../components/ui/Button/Button";
import styles from "./StepActions.module.css";

type Props = {
  backLabel?: string;
  nextLabel: string;
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
};

export function StepActions({
  backLabel = "Terug",
  nextLabel,
  onBack,
  onNext,
  nextDisabled,
}: Props) {
  return (
    <div className={styles.row}>
      {onBack ? (
        <Button variant="secondary" onClick={onBack} className={styles.back}>
          {backLabel}
        </Button>
      ) : (
        <div />
      )}
      <Button onClick={onNext} disabled={nextDisabled} className={styles.next}>
        {nextLabel}
      </Button>
    </div>
  );
}
