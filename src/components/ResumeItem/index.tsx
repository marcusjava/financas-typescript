import React from "react";

import { Container, Title, Value } from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};
const ResumeItem: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value data-testid={title.toLowerCase()} color={color}>
        R$ {value}
      </Value>
    </Container>
  );
};

export default ResumeItem;
