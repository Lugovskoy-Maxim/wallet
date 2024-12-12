import Image from "next/image";

import addIncomes_icon from '../../public/icons/addincomes.png';
import addExpenses_icon from '../../public/icons/addexpenses.png';
import addSwap_icon from '../../public/icons/addswap.png';

import styles from "./transactionActions.module.scss";

export default function TransactionActions() {
  return (
    <section className={styles.transactionActions}>
      <ul className={styles.list}>
        <li>
          <button type="button">
            <div>
              <Image
                src={addIncomes_icon}
                width={48}
                height={48}
                alt="Доходы"
              />
            </div>
            <div className={styles.heading}>
              <h2>Добавить доходы</h2>
              <p>Контролируйте свои доходы</p>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div>
              <Image
                src={addExpenses_icon}
                width={48}
                height={48}
                alt="Расходы"
              />
            </div>
            <div className={styles.heading}>
              <h2>Добавить расходы</h2>
              <p>Контролируйте свои расходы</p>
            </div>
          </button>
        </li>
        <li>
          <button type="button">
            <div>
              <Image
                src={addSwap_icon}
                width={48}
                height={48}
                alt="Перевод"
              />
            </div>
            <div className={styles.heading}>
              <h2>Перевести деньги</h2>
              <p>Совершите перевод на другой счёт</p>
            </div>
          </button>
        </li>
      </ul>
    </section>
  );
}
