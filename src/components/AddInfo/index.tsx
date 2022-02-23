import React, { useState } from "react";
import { Item } from "../../types/Item";
import { categories } from "../../seed/categories";

import { Container, Input, Button, CategoriesSelect } from "./styles";

type categoryOpts = "food" | "rent" | "salary";

type Props = {
  addItem: (item: Item) => void;
};

const AddInfo: React.FC<Props> = ({ addItem }) => {
  const [dateField, setDateField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [categoryField, setCategoryField] = useState<categoryOpts>("food");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [year, month, day] = dateField.split("-");
    const item: Item = {
      date: new Date(+year, +month, +day),
      title: titleField,
      category: categoryField,
      value: valueField,
    };

    addItem(item);
    clearFields();
  };

  const clearFields = () => {
    setDateField("");
    setTitleField("");
    setCategoryField("food");
    setValueField(0);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="date"
        data-testid="input-date"
        required
        value={dateField}
        onChange={(e) => setDateField(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Insira o titulo"
        required
        value={titleField}
        onChange={(e) => setTitleField(e.target.value)}
      />
      <CategoriesSelect
        onChange={(e) => setCategoryField(e.target.value as categoryOpts)}
        value={categoryField}
      >
        {categoryKeys.map((item) => (
          <option value={item} key={item}>
            {categories[item].title}
          </option>
        ))}
      </CategoriesSelect>
      <Input
        type="number"
        required
        value={valueField}
        onChange={(e) => setValueField(parseFloat(e.target.value))}
      />
      <Button type="submit">Salvar</Button>
    </Container>
  );
};

export default AddInfo;
