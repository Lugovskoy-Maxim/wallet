import styles from "./page.module.scss";

export default function Overview() {
  return (
    <section className={styles.overview}>
      <div className={styles.header}>
        <h1>Привет, Максим!</h1>
        <div className={styles.filter}>
          <ul>
            <li>
              <button type="button" className={styles.button}>
                В этом месяце
              </button>
            </li>
            <li>
              <button type="button" className={styles.button}>
                Прошлый месяц
              </button>
            </li>
            <li>
              <button type="button" className={styles.button}>
                В этом году
              </button>
            </li>
            <li>
              <button type="button" className={styles.button}>
                Последние 12 месяцев
              </button>
            </li>
          </ul>
          <div>
            <button type="button" className={styles.calendar}>
              Выберите период
            </button>
          </div>
        </div>
      </div>
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
            <p>₽49,450.00</p><span>27%</span>
          </div>
        </div>
        <div className={styles.expense}>
          <h2>Расходы</h2>
          <div>
            <p>₽13,947.55</p><span>-15%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
