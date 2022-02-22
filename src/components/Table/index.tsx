import React from "react";
import { Item } from "../../types/Item";
import TableItem from "../TableItem";

import { Table, TableHeadColumn } from "./styles";

type Props = {
  list: Item[];
};

const TableList: React.FC<Props> = ({ list }) => {
  if (!list.length) {
    return <p>Não há dados a serem exibidos</p>;
  }
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={120}>Data</TableHeadColumn>
          <TableHeadColumn width={150}>Categoria</TableHeadColumn>
          <TableHeadColumn width={150}>Titulo</TableHeadColumn>
          <TableHeadColumn width={80}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem item={item} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableList;
