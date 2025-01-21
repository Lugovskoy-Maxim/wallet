"use client";
import { useState } from "react";

import Popup from "../Popup/Popup";
import TransactionButton from "./TransactionButton/TransactionButton";

import addIncomes_icon from "../../public/icons/addIncomes.png";
import addExpenses_icon from "../../public/icons/addExpenses.png";
import addSwap_icon from "../../public/icons/addSwap.png";

import styles from "./transactionActions.module.scss";

interface IProps {
  isPopupOpen: boolean;
  type: "incomes" | "expenses" | "empty" | "transfers"
}

export default function TransactionActions() {
  const [isPopupData, setPopupData] = useState<IProps>({
    isPopupOpen: false,
    type: "empty",
  });

  const handleClose = () => {
    setPopupData({
      type: "empty",
      isPopupOpen: false,
    });
  };

  return (
    <section className={styles.transactionActions}>
      <ul className={styles.list}>
        <TransactionButton
          onClick={() =>
            setPopupData({
              type: "incomes",
              isPopupOpen: true,
            })
          }
          imageSrc={addIncomes_icon.src}
          altText="Доходы"
          heading="Добавить доходы"
          subheading="Контролируйте свои доходы"
        />
        <TransactionButton
          onClick={() =>
            setPopupData({
              type: "expenses",
              isPopupOpen: true,
            })
          }
          imageSrc={addExpenses_icon.src}
          altText="Расходы"
          heading="Добавить расходы"
          subheading="Контролируйте свои расходы"
        />
        <TransactionButton
          onClick={() =>
            setPopupData({
              type: "transfers",
              isPopupOpen: true,
            })
          }
          imageSrc={addSwap_icon.src}
          altText="Перевод"
          heading="Перевести деньги"
          subheading="Совершите перевод на другой счёт"
        />
      </ul>
      {isPopupData.isPopupOpen && (
        <Popup
          onClose={handleClose}
          type={isPopupData.type}
        />
      )}
    </section>
  );
}
