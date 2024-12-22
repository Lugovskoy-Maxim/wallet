"use client"
import Image from "next/image";
import styles from "./transactionButton.module.scss";

interface TransactionButtonProps {
  imageSrc: string;
  altText: string;
  heading: string;
  subheading: string;
  onClick?: () => void;
}

export default function TransactionButton({
  imageSrc,
  altText,
  heading,
  subheading,
  onClick,
}: TransactionButtonProps) {
  return (
    <li className={styles.transactionButton}>
      <button type="button" onClick={onClick}>
        <div>
          <Image src={imageSrc} width={48} height={48} alt={altText} />
        </div>
        <div className={styles.heading}>
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
      </button>
    </li>
  );
}