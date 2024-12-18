"use client";
import { useState } from "react";
import styles from "./lastTransactions.module.scss";
import { lastTransactionsData } from "@/constants/MokeData";

interface DataTransactionType {
  id: number;
  name: string;
  date: string;
  type: string;
  sum: number;
  category: string;
}

export default function LastTransactions() {
  // заменить на данные из state rtk
  const [dataTransaction] = useState<DataTransactionType[]>(lastTransactionsData);

  return (
    <div className={styles.lastTransactions}>
      <div className={styles.header}>
        <h2>Последние транзакции</h2>
        <p>Проверьте свои последние транзакции</p>
      </div>
      <div className={styles.thead}>
        <p className={styles.icon}></p>
        <p className={styles.name}>Название</p>
        <p className={styles.date}>Дата</p>
        <p className={styles.category}>Категория</p>
        <p className={styles.sum}>Сумма</p>
        <p className={styles.action}></p>
      </div>
      <ul className={styles.list}>
        {dataTransaction.map((item) => (
          <li key={item.id}>
            <p className={styles.icon}>i</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.date}>{item.date}</p>
            <p className={styles.category}>{item.category}</p>
            <p
              className={`${styles.sum} ${
                item.type === "income"
                  ? styles.income
                  : item.type === "transfer"
                  ? styles.transfer
                  : styles.expense
              }`}
            >
              {item.type === "income"
                ? "+₽"
                : item.type === "transfer"
                ? " ₽"
                : "-₽"}
              {item.sum}
            </p>
            <p className={styles.action}>X</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
