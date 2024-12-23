import arrowUp from '../public/icons/arrow_up.svg';
import arrowDown from '../public/icons/arrow_down.svg';

// Данные баланса
export const balanceData = [
  {
    title: 'Баланс',
    value: 35502.45,
    icon: arrowUp,
    isPositiveChange: true,
    change: '12,5%',
  },
  {
    title: 'Доходы',
    value: 49450.0,
    icon: arrowUp,
    isPositiveChange: true,
    change: '27%',
  },
  {
    title: 'Расходы',
    value: 13947.55,
    icon: arrowDown,
    isPositiveChange: false,
    change: '15%',
  },
];

export const analysisData  = [
  { name: "Дом", value: 36000, color: "#9e77ed" },
  { name: "Кредиты", value: 12000, color: "#f04438" },
  { name: "Авто", value: 3000, color: "#0ba5ec" },
  { name: "Украшения", value: 5680.33, color: "#17B26A" },
  { name: "Продукты", value: 4320, color: "#4e5ba6" },
  { name: "Прочее", value: 2000, color: "#ECEFF2" },
];

export const recentTransactionsData = [
  {
    id: 1,
    name: 'Покупка продуктов',
    date: '15-04-2023',
    type: 'expenses',
    amount: 5000,
    category: {
      name: 'Супермаркеты',
      color: '#4e5ba6'
    }
  },
  {
    id: 2,
    name: 'Зарплата',
    date: '05-04-2023',
    type: 'income',
    amount: 8000,
    category: {
      name: 'Зарплата',
      color: '#3bcc84'
    }
  },
  {
    id: 3,
    name: 'На новый велосипед',
    date: '25-03-2023',
    type: 'transfer',
    amount: 3000,
    category: {
      name: 'Копилка',
      color: '#0ba5ec'
    }
  },
  {
    id: 4,
    name: 'Поступления от продажи вещей',
    date: '10-04-2023',
    type: 'income',
    amount: 7000,
    category: {
      name: 'Без категории',
      color: '#3bcc84'
    }
  },
  {
    id: 5,
    name: 'Обслуживание автомобиля',
    date: '20-04-2023',
    type: 'expenses',
    amount: 2500,
    category: {
      name: 'Авто',
      color: '#f04438'
    }
  },
  {
    id: 7,
    name: 'Получение премии',
    date: '30-04-2023',
    type: 'expenses',
    amount: 5000,
    category: {
      name: 'Без категории',
      color: '#eceff2'
    }
  },
  {
    id: 8,
    name: 'Погашение кредита',
    date: '15-05-2023',
    type: 'income',
    amount: 3500,
    category: {
      name: 'Кредит',
      color: '#f04438'
    }
  }
];