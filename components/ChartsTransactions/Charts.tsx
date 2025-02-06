import ChartAreaResponsiveContainer from "@/components/ChartAreaResponsiveContainer/ChartAreaResponsiveContainer";
import { recentTransactionsData } from "@/constants/MokeData";
import styles from "./charts.module.scss";

export default function Charts() {
  const chartDataIncome = recentTransactionsData
    .filter((transaction) => transaction.type === "income")
    .map((transaction) => ({
      date: transaction.date,
      amount: transaction.amount,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const chartDataExpenses = recentTransactionsData
    .filter((transaction) => transaction.type === "expenses")
    .map((transaction) => ({
      date: transaction.date,
      amount: transaction.amount,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <section className={styles.charts}>
      <div className={styles.chart}>
        <span>Доходы</span>
        <ChartAreaResponsiveContainer
          data={chartDataIncome}
          dataKeyName="date"
          dataKeyAmount="amount"
          fill="#155eef"
        />
      </div>
      <div className={styles.chart}>
        <span>Расходы</span>
        <ChartAreaResponsiveContainer
          data={chartDataExpenses}
          dataKeyName="date"
          dataKeyAmount="amount"
          fill="#155eef"
        />
      </div>
    </section>
  );
}
