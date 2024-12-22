import styles from "./popup.module.scss";
import x_close_icon from "../../public/icons/x-close.svg";
import Image from "next/image";

const PopupContext = {
  empty: {
    heading: "",
    subheading: "",
    content: "",
  },
  incomes: {
    heading: "Доходы",
    subheading:
      "Доходы — сумма денег, полученных от продажи товаров или услуг, или от инвестиций или иных активов.",
    content: "content",
  },
  expenses: {
    heading: "Расходы",
    subheading:
      "Расходы — сумма денег, потраченных на покупку товаров и услуг, а также на оплату услуг и платежи.",
    content: "content",
  },
  swap: {
    heading: "Перевод",
    subheading: "Перевод — перевод денег с одного счета на другой.",
    content: "content",
  },
};

interface Props {
  type: keyof typeof PopupContext;
  onClose: () => void;
}

export default function Popup({ type, onClose }: Props) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const contextData = PopupContext[type];

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <button className={styles.close} onClick={onClose}>
          <Image src={x_close_icon} alt={"Закрыть"} width={32} height={32} />
        </button>
        <div className={styles.container}>
          <h2>{contextData.heading}</h2>
          <p>{contextData.subheading}</p>
          {type}
        </div>
      </div>
    </div>
  );
}
