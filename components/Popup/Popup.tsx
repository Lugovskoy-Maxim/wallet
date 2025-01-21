import styles from "./popup.module.scss";
import x_close_icon from "../../public/icons/x-close.svg";
import Image from "next/image";

interface Props {
  type: "empty" | "incomes" | "expenses" | "transfers";
  onClose: () => void;
}

export default function Popup({ type, onClose }: Props) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  let heading = "";
  let subheading = "";

  switch (type) {
    case "incomes":
      heading = "Доходы";
      subheading =
        "Доходы — сумма денег, полученных от продажи товаров или услуг, или от инвестиций или иных активов.";
      break;
    case "expenses":
      heading = "Расходы";
      subheading =
        "Расходы — сумма денег, потраченных на покупку товаров и услуг, а также на оплату услуг и платежи.";
      break;
    case "transfers":
      heading = "Перевод";
      subheading = "Перевод — перевод денег с одного счета на другой.";
      break;
    default:
      heading = "";
      subheading = "";
  }

  const getFormField = () => {
    switch (type) {
      case "incomes":
      case "expenses":
        return (
          <>
            <label htmlFor="category" className={styles.label}>
              Категория
            </label>
            <select id="category" className={styles.select}>
              <option value="" disabled selected hidden>
                Выберите категорию
              </option>
              <option>none</option>
              {/* опция для получения категорий */}
            </select>
          </>
        );
      case "transfers":
        return (
          <>
            <label htmlFor="wallet" className={styles.label}>
              Кошелёк
            </label>
            <select id="wallet" className={styles.select}>
              <option value="" disabled selected hidden>
                Выберите кошелёк
              </option>
              <option>none</option>
              {/* опция для получения кошельков */}
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <button className={styles.close} onClick={onClose}>
          <Image src={x_close_icon} alt={"Закрыть"} width={32} height={32} />
        </button>
        <div className={styles.container}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
          <form className={styles.form}>
            {getFormField()}
            <label htmlFor="amount" className={styles.label}>
              Сумма
            </label>
            <input id="amount" type="number" className={styles.input} />
            <label htmlFor="date" className={styles.label}>
              Дата
            </label>
            <input id="date" type="date" className={styles.input} />
            <label htmlFor="description" className={styles.label}>
              Описание
            </label>
            <input id="description" type="text" className={styles.input} />
            <div className={styles.buttonGroup}>
              <button type="reset" className={styles.resetButton}>
                Сбросить
              </button>
              <button type="submit" className={styles.submitButton}>
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
