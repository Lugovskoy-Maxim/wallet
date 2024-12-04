import Link from "next/link";
import logo_icon from "../../public/Logo.svg";
import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <Link href="/">
          <Image src={logo_icon} width={32} height={32} alt="Logo" />
        </Link>
        <div className={styles.about}>
          <h1>О проекте</h1>
          <p>
            Приложение создано для облегчения и контроля собственных расходов и
            доходов, улучшения благосостояния и просто потому что могу.
          </p>
        </div>
        <div className={styles.useful_information}>
          <h1>Полезная информация</h1>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
        <div className={styles.contacts}>
          <h1>Контакты</h1>
          <ul className={styles.list}>
            <li>
              <Link href="mailto:lugovskou.myu@ya.ru">E-mail</Link>
            </li>
            <li>
              <Link href="tg://resolve?domain=TomiloDev">Telegram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>© 2024 Все права защищены</p><Link href="https://github.com/Lugovskoy-Maxim">GitHub</Link>
      </div>
    </footer>
  );
}
