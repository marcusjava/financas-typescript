import React from "react";
import {
  formatCurrentMonth,
  getNextMonth,
  getPrevMonth,
} from "../../helpers/dateFilter";
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
    onMonthChange(getPrevMonth(currentMonth));
  };

  const handleNextMonth = () => {
    onMonthChange(getNextMonth(currentMonth));
  };

  return (
    <Container>
      <MonthArea>
        <Arrow onClick={handlePrevMonth}>⬅️</Arrow>
        <Title>
          <h3 data-testid="current-month">
            {formatCurrentMonth(currentMonth)}
          </h3>
        </Title>
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
