import { Item } from "../types/Item";

let months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");

  return `${months[parseInt(month) - 1]} de ${year} `;
};

export const formatDate = (date: Date): string => {
  return `${addZeroToDate(date.getDate())}/${addZeroToDate(
    date.getMonth()
  )}/${date.getFullYear()}`;
};

const addZeroToDate = (n: number): string => {
  return n < 10 ? `0${n}` : `${n}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};
