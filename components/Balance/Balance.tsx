import Image from 'next/image';
import styles from './balance.module.scss';
import { balanceData } from '@/constants/MokeData';

export default function Balance() {
  const balanceItems = balanceData.map((item) => (
    <div key={item.title} className={styles.wrapper}>
      <h2>{item.title}</h2>
      <div>
        <p>₽{item.value}</p>
        <div>
          <Image src={item.icon} alt='Изменения' width={0} height={0}/>
          {item.isPositiveChange ? '' : '-'}{item.change}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.content}>
      {balanceItems}
    </div>
  );
}