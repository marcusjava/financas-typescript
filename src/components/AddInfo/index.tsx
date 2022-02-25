import React, { useState } from "react";
import { Item } from "../../types/Item";
import { categories } from "../../seed/categories";

import {
  Container,
  Input,
  Button,
  CategoriesSelect,
  Form,
  Error,
  InputContainer,
} from "./styles";

type categoryOpts = "food" | "rent" | "salary";

type Props = {
  addItem: (item: Item) => void;
};

const AddInfo: React.FC<Props> = ({ addItem }) => {
  const [dateField, setDateField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [categoryField, setCategoryField] = useState<categoryOpts>("food");
  const [valueField, setValueField] = useState("0");
  const [errors, setErrors] = useState({
    dateField: false,
    titleField: false,
    valueField: false,
  });

  let categoryKeys: string[] = Object.keys(categories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [year, month, day] = dateField.split("-");

    if (isNaN(new Date(dateField).getTime())) {
      setErrors({ ...errors, dateField: true });
      return;
    }

    if (titleField === "") {
      setErrors({ ...errors, titleField: true });
      return;
    }

    if (parseFloat(valueField) <= 0) {
      setErrors({ ...errors, valueField: true });
      return;
    }

    const item: Item = {
      date: new Date(+year, +month, +day),
      title: titleField,
      category: categoryField,
      value: parseFloat(valueField),
    };

    addItem(item);
    clearFields();
  };

  const clearFields = () => {
    setDateField("");
    setTitleField("");
    setCategoryField("food");
    setValueField("0");
    setErrors({
      dateField: false,
      titleField: false,
      valueField: false,
    });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="date"
            data-testid="input-date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
          {errors.dateField && <Error>Campo obrigatorio </Error>}
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Insira o titulo"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
          {errors.titleField && <Error>Campo obrigatorio </Error>}
        </InputContainer>

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

        <InputContainer>
          <Input
            type="text"
            value={valueField}
            onChange={(e) => setValueField(e.target.value)}
          />
          {errors.valueField && <Error>Campo obrigatorio </Error>}
        </InputContainer>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default AddInfo;
