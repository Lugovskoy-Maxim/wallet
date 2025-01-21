"use client";
import { useState } from "react";
import styles from "./lastTransactions.module.scss";
import { recentTransactionsData } from "@/constants/MokeData";
import Image from "next/image";
import action_icon from "../../public/icons/action_icon.svg";

type Transaction = {
  id: number;
  name: string;
  date: string;
  type: string;
  amount: number;
  category: {
    name: string;
    color: string;
  };
};

function geAmount(type: Transaction["type"], amount: number) {
  if (type === "income") {
    return `+ ${amount} ₽`;
  } else if (type === "transfer") {
    return `${amount} ₽`;
  } else {
    return `- ${amount} ₽`;
  }
}

export default function LastTransactions() {
  const [transactions] = useState<Transaction[]>(recentTransactionsData);
  // const [numberRecentTrans, setNumberRecentTrans] = useState(10); // Текущая страница

  return (
    <div className={styles.lastTransactions}>
      <div className={styles.header}>
        <h2>Последние транзакции</h2>
        <p>Проверьте свои последние транзакции</p>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.color}></th>
            <th className={styles.name}>Название</th>
            <th className={styles.date}>Дата</th>
            <th className={styles.category}>Категория</th>
            <th className={styles.amount}>Сумма</th>
            <th className={styles.action}></th>
          </tr>
        </thead>
        <tbody className={styles.list}>
          {transactions.map(({ id, name, date, type, amount, category }) => (
            <tr key={id}>
              <td
                className={styles.color}
                style={{ backgroundColor: category.color }}
              ></td>
              <td className={styles.name}>{name}</td>
              <td className={styles.date}>{date}</td>
              <td className={styles.category}>{category.name}</td>
              <td className={`${styles.amount} ${styles[type]}`}>
                {geAmount(type, amount)}
              </td>
              <td className={styles.action}>
                <button type="button">
                  <Image src={action_icon} alt="Опции" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {<button className={styles.loadMore}>Загрузить еще</button>}
    </div>
  );
}
