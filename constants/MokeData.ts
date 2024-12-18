import arrow_up from "../public/icons/arrow_up.svg";
import arrow_down from "../public/icons/arrow_down.svg";

export const balanceData = [
  {
    title: "Баланс",
    value: 35502.45,
    icon: arrow_up,
    plus: true,
    change: "12,5%",
  },
  {
    title: "Доходы",
    value: 49450.0,
    icon: arrow_up,
    plus: true,

    change: "27%",
  },
  {
    title: "Расходы",
    value: 13947.55,
    icon: arrow_down,
    plus: false,
    change: "15%",
  },
];

export const analyzeData = [
  { name: "Дом", value: 36000, color: "#9e77ed" },
  { name: "Кредиты", value: 12000, color: "#f04438" },
  { name: "Авто", value: 3000, color: "#0ba5ec" },
  { name: "Украшения", value: 5680.33, color: "#17B26A" },
  { name: "Продукты", value: 4320, color: "#4e5ba6" },
  { name: "Прочее", value: 2000, color: "#ECEFF2" },
];

export const lastTransactionsData = [
  {
    id: 1,
    name: "Покупка продуктов",
    date: "15-04-2023",
    type: "expenses",
    sum: 5000,
    category: "Супермаркеты",
  },
  {
    id: 2,
    name: "Зарплата",
    date: "05-04-2023",
    type: "income",
    sum: 8000,
    category: "Зарплата ",
  },
  {
    id: 3,
    name: "На новый велосипед",
    date: "25-03-2023",
    type: "transfer",
    sum: 3000,
    category: "Копилка",
  },
  {
    id: 4,
    name: "Поступления от продажи вещей",
    date: "10-04-2023",
    type: "income",
    sum: 7000,
    category: "Без категории",
  },
  {
    id: 5,
    name: "Обслуживание автомобиля",
    date: "20-04-2023",
    type: "expenses",
    sum: 2500,
    category: "Авто",
  },
  {
    id: 7,
    name: "Получение премии",
    date: "30-04-2023",
    type: "expenses",
    sum: 5000,
    category: "Без категории",
  },
  {
    id: 8,
    name: "Погашение кредита",
    date: "15-05-2023",
    type: "income",
    sum: 3500,
    category: "Кредит",
  },
];
