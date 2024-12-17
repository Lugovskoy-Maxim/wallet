
import Image from 'next/image';
import styles from './balance.module.scss';
import arrow_up from '../../public/icons/arrow_up.svg';
import arrow_down from '../../public/icons/arrow_down.svg';

export default function Balance() {
  return (
    <div className={styles.content}>
      <div className={styles.wallet}>
        <h2>Баланс</h2>
        <div>
          <p>₽35,502.45</p>
          <div><Image src={arrow_up} alt={''}  width={0} height={0}/>12,5%</div>
        </div>
      </div>
      <div className={styles.income}>
        <h2>Доходы</h2>
        <div>
          <p>₽49,450.00</p>
          <div><Image src={arrow_up} alt={''}  width={0} height={0}/>  27%</div>
        </div>
      </div>
      <div className={styles.expense}>
        <h2>Расходы</h2>
        <div>
          <p>₽13,947.55</p>
          <div><Image src={arrow_down} alt={''}  width={0} height={0}/>-15%</div>
        </div>
      </div>
    </div>
  );
}
