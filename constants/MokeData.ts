import arrowUp from '../public/icons/arrow_up.svg';
import arrowDown from '../public/icons/arrow_down.svg';

export const walletsList = [
  { 
    id: 1,
    name: 'Основной кошелек',
    balance: 35502.45,
    currency: 'RUB',
    isDefault: true,
    
  },
]

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
    date: '2023-04-15',
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
    date: '2023-04-05',
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
    date: '2023-03-25',
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
    date: '2023-04-10',
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
    date: '2023-04-20',
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
    date: '2023-04-30',
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
    date: '2023-05-15',
    type: 'income',
    amount: 3500,
    category: {
      name: 'Кредит',
      color: '#f04438'
    }
  },
  {
    id: 9,
    name: 'Оплата мобильного телефона',
    date: '2023-06-15',
    type: 'expenses',
    amount: 2000,
    category: {
      name: 'Телекоммуникации',
      color: '#f04438'
    }
  },
  {
    id: 10,
    name: 'Заработок на фрилансе',
    date: '2023-07-15',
    type: 'income',
    amount: 6000,
    category: {
      name: 'Финансовый доход',
      color: '#3bcc84'
    }
  },
  {
    id: 11,
    name: 'Покупка одежды',
    date: '2023-08-15',
    type: 'expenses',
    amount: 4000,
    category: {
      name: 'Одежда',
      color: '#f04438'
    }
  },
  {
    id: 12,
    name: 'Медицинская консультация',
    date: '2023-09-15',
    type: 'expenses',
    amount: 1500,
    category: {
      name: 'Здравоохранение',
      color: '#f04438'
    }
  },
  {
    id: 13,
    name: 'Оплата коммунальных услуг',
    date: '2023-10-15',
    type: 'expenses',
    amount: 4500,
    category: {
      name: 'Коммунальные услуги',
      color: '#f04438'
    }
  },
  {
    id: 14,
    name: 'Оплата ипотеки',
    date: '2023-11-15',
    type: 'expenses',
    amount: 5000,
    category: {
      name: 'Ипотека',
      color: '#f04438'
    }
  },
  {
    id: 15,
    name: 'Покупка книг',
    date: '2023-12-15',
    type: 'expenses',
    amount: 1200,
    category: {
      name: 'Образование',
      color: '#f04438'
    }
  }
];