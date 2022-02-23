import React, { useState, useEffect } from "react";
import { Container, Header, HeaderText, Body } from "./App.styles";
import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { categories } from "./seed/categories";
import { items } from "./seed/items";
import TableList from "./components/Table";
import Info from "./components/Info";
import AddInfo from "./components/AddInfo";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const addItem = (item: Item) => {
    setList([...list, item]);
  };

  useEffect(() => {
    setIncome(0);
    setExpense(0);
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        setExpense((expense) => expense + filteredList[i].value);
      } else {
        setIncome((income) => income + filteredList[i].value);
      }
    }
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <Info
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <AddInfo addItem={addItem} />
        <TableList list={filteredList} />
      </Body>
    </Container>
  );
}

export default App;
