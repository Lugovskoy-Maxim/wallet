import Link from "next/link";
import Image from "next/image";
import Logo_icon from "../../public/Logo.svg";
import styles from "./signin.module.scss";

export default function SignIn() {
  return (
    <section className={styles.signin}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
          <Image src={Logo_icon} alt="Logo" width={40} height={40} />
          <p>Wallet</p>

          </div>
          <Link href="/signup">Регистрация</Link>
        </div>
        <h1>Войти</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <Link href="/forgot">Забыли пароль?</Link>
          <button type="submit">Войти</button>
        </form>
        <p>или</p>
        <div className={styles.anotherAuth}>
          <p>Яндекс</p>
          <p>Google</p>
          <p>Вконтакте</p>
        </div>
      </div>
    </section>
  );
}
