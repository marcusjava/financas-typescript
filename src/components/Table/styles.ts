import styled from "styled-components";

type Props = {
  width?: number;
};

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
`;

export const TableHeadColumn = styled.th<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  font-size: 25px;
`;
