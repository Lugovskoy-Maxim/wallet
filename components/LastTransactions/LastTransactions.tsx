"use client";
import { useState } from "react";
import styles from "./lastTransactions.module.scss";
import { lastTransactionsData } from "@/constants/MokeData";
import Image from "next/image";
import action_icon from "../../public/icons/action_icon.svg";

type Transaction = {
  id: number;
  name: string;
  date: string;
  type: string;
  sum: number;
  category: string;
};

function getSum(type: Transaction["type"], sum: number) {
  if (type === "income") {
    return `+ ${sum} ₽`;
  } else if (type === "transfer") {
    return `${sum} ₽`;
  } else {
    return `- ${sum} ₽`;
  }
}

export default function LastTransactions() {
  const [transactions] = useState<Transaction[]>(lastTransactionsData);
  // const [numberRecentTrans, setNumberRecentTrans] = useState(10); // Текущая страница

  return (
    <div className={styles.lastTransactions}>
      <div className={styles.header}>
        <h2>Последние транзакции</h2>
        <p>Проверьте свои последние транзакции</p>
      </div>
      <div className={styles.thead}>
        <p className={styles.name}>Название</p>
        <p className={styles.date}>Дата</p>
        <p className={styles.category}>Категория</p>
        <p className={styles.sum}>Сумма</p>
        <p className={styles.action}></p>
      </div>
      <ul className={styles.list}>
        {transactions.map(({ id, name, date, type, sum, category }) => (
          <li key={id}>
            <p className={styles.name}>{name}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.category}>{category}</p>
            <p className={`${styles.sum} ${styles[type]}`}>
              {getSum(type, sum)}
            </p>
            <p className={styles.action}>
              <button type="button">
                <Image src={action_icon} alt={"Опции"} />
              </button>
            </p>
          </li>
        ))}
      </ul>
      {<button className={styles.loadMore}>Загрузить еще</button>}
    </div>
  );
}
