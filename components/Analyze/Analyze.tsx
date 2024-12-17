"use client";
import { useState } from "react";
import styles from "./analyze.module.scss";
import ExamplePieChart from "../PieChart/PieChart";
import LastTransactions from "../LastTransactions/LastTransactions";

interface DataType {
  id?: number;
  name: string;
  value: number;
  color?: string;
}

export default function Analyze() {
  // заменить на данные из state rtk
  const [data] = useState<DataType[]>([
    { name: "Дом", value: 36000, color: "#9e77ed" },
    { name: "Кредиты", value: 12000, color: "#f04438" },
    { name: "Авто", value: 3000, color: "#0ba5ec" },
    { name: "Украшения", value: 5680.33, color: "#17B26A" },
    { name: "Продукты", value: 4320, color: "#4e5ba6" },
    { name: "Прочее", value: 2000, color: "#ECEFF2" },
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
      <LastTransactions />
    </section>
  );
}
