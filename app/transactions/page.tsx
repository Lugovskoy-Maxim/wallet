import Filters from "@/components/Filters/Filters";
import LastTransactions from "@/components/LastTransactions/LastTransactions";
import TransactionActions from "@/components/TransactionActions/TransactionActions";
import styles from "./transactions.module.scss";
import Charts from "@/components/ChartsTransactions/Charts";

export default function Transactions() {
  
  return (
    <section className={styles.transactions}>
      <TransactionActions />
      <Filters />
      <Charts/>
      <LastTransactions />
    </section>
  );
}
