"use client";
import { useState } from "react";
import styles from "./analyze.module.scss";
import ExamplePieChart from "../PieChart/PieChart";

interface DataType {
  id?: number;
  name: string;
  value: number;
  color?: string;
}

interface DataTransactionType {
  id: number;
  name: string;
  date: string;
  type: "income" | "expenses" | "transfer";
  sum: number;
  category: string;
}

export default function Analyze() {
  const [data] = useState<DataType[]>([
    { name: "Дом", value: 36000, color: "#9e77ed" },
    { name: "Кредиты", value: 12000, color: "#f04438" },
    { name: "Авто", value: 3000, color: "#0ba5ec" },
    { name: "Украшения", value: 5680.33, color: "#17B26A" },
    { name: "Продукты", value: 4320, color: "#4e5ba6" },
    { name: "Прочее", value: 2000, color: "#ECEFF2" },
  ]);

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
    <section className={styles.analyze}>
      <div className={styles.wheelGraph}>
        <h2>Расходы по категориям</h2>
        <div className={styles.wheel}>
          <ExamplePieChart data={data} />
        </div>
        <ul>
          {data.map((item) => (
            <li key={item.name}>
              <span
                className={styles.color}
                style={{ backgroundColor: item.color }}
              ></span>
              <div className={styles.info}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.value}>{item.value} ₽</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
    </section>
  );
}
