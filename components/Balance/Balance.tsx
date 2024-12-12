
import styles from './balance.module.scss';

export default function Balance() {
  return (
    <div className={styles.content}>
      <div className={styles.wallet}>
        <h2>Баланс</h2>
        <div>
          <p>₽35,502.45</p>
          <span>12,5%</span>
        </div>
      </div>
      <div className={styles.income}>
        <h2>Доходы</h2>
        <div>
          <p>₽49,450.00</p>
          <span>27%</span>
        </div>
      </div>
      <div className={styles.expense}>
        <h2>Расходы</h2>
        <div>
          <p>₽13,947.55</p>
          <span>-15%</span>
        </div>
      </div>
    </div>
  );
}
