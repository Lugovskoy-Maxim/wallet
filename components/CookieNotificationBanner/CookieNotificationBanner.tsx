"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./cookie.module.scss";
import cookie_icon from "../../public/cookie.svg";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/helpers/cookie";

export default function CookieNotificationBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Проверка куки
  useEffect(() => {
    const isCookieAccepted = getCookie("cookieAccepted");
    if (isCookieAccepted === "true") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  // Принятие куки
  const handleAcceptCookies = () => {
    setCookie("cookieAccepted", "true", { expires: 365 * 24 * 60 * 60 }); // на год
    setIsVisible(false);
  };

  return (
    <div
      className={`${styles.cookieBanner} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.info}>
        <Image src={cookie_icon} alt="Cookie icon" />

        <p>
          Мы используем некоторые файлы cookie, которые помогают повысить
          эффективность работы с нашим сайтом. Продолжая работу с сайтом, вы
          подтверждаете, что предупреждены об этом и разрешаете нам использовать
          cookie.{" "}
          <Link href="#">Подробнее</Link>
        </p>
      </div>
      <button className={styles.button} onClick={handleAcceptCookies}>
        Ок
      </button>
    </div>
  );
}
