import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  flex: 1;
  gap: 15px;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 10px;
`;
export const Value = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${({ color }) => color ?? "#000"};
`;
