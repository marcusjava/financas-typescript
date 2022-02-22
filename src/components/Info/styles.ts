import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: -75px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Arrow = styled.button`
  cursor: pointer;
  width: 40px;
  font-size: 25px;
  text-align: center;
  border: none;
  background-color: transparent;
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
`;
