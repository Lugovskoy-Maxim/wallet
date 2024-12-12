import styles from './filters.module.scss';

export default function Filters() {
  return (
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
  );
}
