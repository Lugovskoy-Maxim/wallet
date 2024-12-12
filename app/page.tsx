import Balance from "@/components/Balance/Balance";
import styles from "./page.module.scss";
import Filters from "@/components/Filters/Filters";
import TransactionActions from "@/components/TransactionActions/TransactionActions";
import Analyze from "@/components/Analyze/Analyze";

export default function Overview() {
  return (
    <section className={styles.overview}>
      <Filters />
      <Balance />
      <TransactionActions/>
      <Analyze/>
    </section>
  );
}
