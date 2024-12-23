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
      <div className={styles.thead}>
        <span className={styles.color}></span>
        <p className={styles.name}>Название</p>
        <p className={styles.date}>Дата</p>
        <p className={styles.category}>Категория</p>
        <p className={styles.amount}>Сумма</p>
        <p className={styles.action}></p>
      </div>
      <ul className={styles.list}>
        {transactions.map(
          ({ id, name, date, type, amount: amount, category }) => (
            <li key={id}>
              <span
                className={styles.color}
                style={{ backgroundColor: category.color }}
              ></span>
              <p className={styles.name}>{name}</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.date}>{date}</p>
              <p className={styles.category}>{category.name}</p>
              <p className={`${styles.amount} ${styles[type]}`}>
                {geAmount(type, amount)}
              </p>
              <p className={styles.action}>
                <button type="button">
                  <Image src={action_icon} alt={"Опции"} />
                </button>
              </p>
            </li>
          )
        )}
      </ul>
      {<button className={styles.loadMore}>Загрузить еще</button>}
    </div>
  );
}
