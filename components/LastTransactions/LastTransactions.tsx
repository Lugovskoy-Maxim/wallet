"use client";
import { useState } from "react";
import styles from "./lastTransactions.module.scss";

interface DataTransactionType {
  id: number;
  name: string;
  date: string;
  type: "income" | "expenses" | "transfer";
  sum: number;
  category: string;
}

export default function LastTransactions() {
  // заменить на данные из state rtk
  const [dataTransaction] = useState<DataTransactionType[]>([
    {
      id: 1,
      name: "Покупка продуктов",
      date: "15-04-2023",
      type: "income",
      sum: 5000,
      category: "Супермаркеты",
    },
    {
      id: 2,
      name: "Зарплата",
      date: "05-04-2023",
      type: "expenses",
      sum: 8000,
      category: "Зарплата ",
    },
    {
      id: 3,
      name: "На новый велосипед",
      date: "25-03-2023",
      type: "transfer",
      sum: 3000,
      category: "Копилка",
    },
    {
      id: 4,
      name: "Поступления от продажи вещей",
      date: "10-04-2023",
      type: "income",
      sum: 7000,
      category: "Без категории",
    },
    {
      id: 5,
      name: "Обслуживание автомобиля",
      date: "20-04-2023",
      type: "expenses",
      sum: 2500,
      category: "Авто",
    },
    {
      id: 7,
      name: "Получение премии",
      date: "30-04-2023",
      type: "expenses",
      sum: 5000,
      category: "Без категории",
    },
    {
      id: 8,
      name: "Погашение кредита",
      date: "15-05-2023",
      type: "income",
      sum: 3500,
      category: "Кредит",
    },
  ]);

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
