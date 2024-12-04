import Header from "@/components/Header/Header";
import styles from "./page.module.scss";


export default function Page() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
