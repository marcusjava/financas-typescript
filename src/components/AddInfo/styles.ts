import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 25px 0;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  text-align: center;
  height: 90px;
  padding: 0 25px;
  flex-wrap: wrap;
  @media (max-width: 956px) {
    height: 70%;
    flex-direction: column;
    padding: 50px 0;
  }
`;

export const Error = styled.span`
  color: red;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  test-align: center;
  gap: 15px;
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
