import React from "react";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../seed/categories";
import { Item } from "../../types/Item";

import { TableRow, TableColumn, Category, Value } from "./styles";

interface Props {
  item: Item;
}

const TableItem: React.FC<Props> = ({ item }) => {
  return (
    <TableRow>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </Value>
      </TableColumn>
    </TableRow>
  );
};

export default TableItem;
