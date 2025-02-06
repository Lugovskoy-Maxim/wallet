import Link from "next/link";
import Image from "next/image";
import Logo_icon from "../../public/Logo.svg";
import styles from "./signup.module.scss";

export default function Signup() {
  return (
    <section className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src={Logo_icon} alt="Logo" width={40} height={40} />
            <p>Wallet</p>
          </div>
          <Link href="/signin">Войти</Link>
        </div>

        <h1>Регистрация</h1>
        <form>
          <input type="text" placeholder="Введите ваше имя" required/>
          <input type="email" placeholder="Введите почтовый адрес" required/>
          <input type="password" placeholder="Введите пароль" required/>
          <input type="password" placeholder="Повторите пароль" required/>

          <p>
            Нажимая кнопку ”Регистрация” вы
            даёте свое согласие на обработку своих  персональных данных и
            принимаете{" "}
            <Link href={"/privacy-policy"} target="_blank">пользовательское соглашение</Link>.
          </p>
          <button type="submit">Регистрация</button>
        </form>
      </div>
    </section>
  );
}
