import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  margin: 25px 0;
  gap: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  text-align: center;
  height: 90px;
  padding: 0 25px;
`;

export const Input = styled.input`
  font-size: 25px;
  padding: 0 5px;
`;

export const Button = styled.button`
  font-size: 25px;
  background-color: blue;
  color: #fff;
  padding: 3px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const CategoriesSelect = styled.select`
  font-size: 25px;
`;
