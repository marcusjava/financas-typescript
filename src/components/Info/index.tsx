import React from "react";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";

import { Container, MonthArea, ResumeArea, Arrow, Title } from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (value: string) => void;
  income: number;
  expense: number;
};

const Info: React.FC<Props> = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <Container>
      <MonthArea>
        <Arrow onClick={handlePrevMonth}>⬅️</Arrow>
        <Title>{formatCurrentMonth(currentMonth)}</Title>
        <Arrow onClick={handleNextMonth}>➡️</Arrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </ResumeArea>
    </Container>
  );
};

export default Info;
