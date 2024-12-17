import Image from "next/image";
import Link from "next/link";
import logo_icon from "../../public/Logo.svg";
import setting_icon from "../../public/icons/setting.svg";
import notification_icon from "../../public/icons/notification.svg";
import avatar_icon from "../../public/icons/account_avatar.svg";
import styles from "./header.module.scss";


export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image src={logo_icon} alt="логотип" width={32} height={32} />
        <span>Wallet Watch</span>
      </Link>
      <nav>
        <Link href={"/"}>Обзор</Link>
        <Link href={"/transactions"}>Транзакции</Link>
        <Link href={"#"}>Планирование</Link>
        <Link href={"#"}>Категории</Link>
        <Link href={"#"}>Кошельки</Link>
        {/* <Link href={"#"}>Аналитика</Link> */}
      </nav>
      <div className={styles.user}>
        <Link href={"#"}>
          <Image src={setting_icon} alt="настройки" width={24} height={24} />
        </Link>
        <Link href={"#"}>
          <Image
            src={notification_icon}
            alt="уведомления"
            width={24}
            height={24}
          />
        </Link>
        <Link href={"#"}>
          <Image src={avatar_icon} alt="аватар" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}
