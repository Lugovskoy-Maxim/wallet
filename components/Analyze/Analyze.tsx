"use client";
import { useState } from "react";
import styles from "./analyze.module.scss";
import ExamplePieChart from "../PieChart/PieChart";
import LastTransactions from "../LastTransactions/LastTransactions";
import { analyzeData } from "@/constants/MokeData";

interface DataType {
  id?: number;
  name: string;
  value: number;
  color?: string;
}

export default function Analyze() {
  // заменить на данные из state rtk
  const [data] = useState<DataType[]>(analyzeData);

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
