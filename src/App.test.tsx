import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";
import {
  getCurrentMonth,
  formatCurrentMonth,
  getPrevMonth,
  getNextMonth,
} from "./helpers/dateFilter";
import userEvent from "@testing-library/user-event";

describe("Should renders items correctly", () => {
  test("show items on screen", () => {
    render(<App />);
    expect(screen.getByText(/sistema financeiro/i)).toBeInTheDocument();
    expect(screen.getByText(/receitas/i)).toBeInTheDocument();
    expect(screen.getByText(/despesas/i)).toBeInTheDocument();
    expect(screen.getByText(/balanço/i)).toBeInTheDocument();
    expect(screen.getByText("⬅️")).toBeInTheDocument();
    expect(screen.getByText("➡️")).toBeInTheDocument();
    expect(screen.getByTestId("input-date")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Alimentação")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText(/Data/i)).toBeInTheDocument();
    expect(screen.getByText(/Categoria/i)).toBeInTheDocument();
    expect(screen.getByText(/Titulo/i)).toBeInTheDocument();
    expect(screen.getByText(/Valor/i)).toBeInTheDocument();
  });
  test("should render current month formated", () => {
    render(<App />);
    const currentMonth = getCurrentMonth();
    const formatedCurrentMonth = formatCurrentMonth(currentMonth);
    expect(screen.getByText(formatedCurrentMonth)).toBeInTheDocument();
  });
  test("should show color of categories correctly", async () => {
    render(<App />);
    const table = screen.getByRole("table");
    const foods = within(table).getAllByText("Alimentação");
    const rents = within(table).getAllByText("Aluguel");
    const salaries = within(table).getAllByText("Salário");

    expect(foods[0]).toHaveStyle("background-color: blue");
    expect(rents[0]).toHaveStyle("background-color: brown");
    expect(salaries[0]).toHaveStyle("background-color: green");
  });
});

describe("Testing Info Area", () => {
  test("should click on Prev month button", () => {
    render(<App />);
    const currentMonth = getCurrentMonth();
    const prevMonth = getPrevMonth(currentMonth);
    const formatedPrevMonth = formatCurrentMonth(prevMonth);
    const prevButton = screen.getByText("⬅️");
    userEvent.click(prevButton);
    expect(screen.getByText(formatedPrevMonth)).toBeInTheDocument();
  });
  test("should click on Next month button", () => {
    render(<App />);
    const currentMonth = getCurrentMonth();
    const nextMonth = getNextMonth(currentMonth);
    const formatedNextMonth = formatCurrentMonth(nextMonth);
    const nextButton = screen.getByText("➡️");
    userEvent.click(nextButton);
    expect(screen.getByText(formatedNextMonth)).toBeInTheDocument();
  });
});

describe("testing add area", () => {
  test("testing date required field", () => {
    render(<App />);
    const titleField = screen.getByPlaceholderText("Insira o titulo");
    const valueField = screen.getByDisplayValue("0");
    const button = screen.getByRole("button", { name: "Salvar" });
    userEvent.type(titleField, "teste");
    userEvent.type(valueField, "1000");
    userEvent.click(button);
    expect(screen.getByText("Campo obrigatorio")).toBeInTheDocument();
  });
  test("testing title required field", () => {
    render(<App />);
    const dateField = screen.getByTestId("input-date");
    const valueField = screen.getByDisplayValue("0");
    const button = screen.getByRole("button", { name: "Salvar" });
    userEvent.type(dateField, "25/02/2022");
    userEvent.type(valueField, "1000");
    userEvent.click(button);
    expect(screen.getByText("Campo obrigatorio")).toBeInTheDocument();
  });
  test("testing value required field", () => {
    render(<App />);
    const dateField = screen.getByTestId("input-date");
    const titleField = screen.getByPlaceholderText("Insira o titulo");
    const valueField = screen.getByDisplayValue("0");
    const button = screen.getByRole("button", { name: "Salvar" });
    userEvent.type(dateField, "25/02/2022");
    userEvent.type(titleField, "teste");
    userEvent.type(valueField, "0");
    userEvent.click(button);
    expect(screen.getByText("Campo obrigatorio")).toBeInTheDocument();
  });
  test("should insert new item", () => {
    render(<App />);
    const dateField = screen.getByTestId("input-date");
    const titleField = screen.getByPlaceholderText("Insira o titulo");
    const valueField = screen.getByDisplayValue("0");
    const select = screen.getByRole("combobox");
    const button = screen.getByRole("button", { name: "Salvar" });
    userEvent.clear(dateField);
    fireEvent.change(dateField, { value: "25/02/2022" });
    userEvent.type(titleField, "Giraffas");
    userEvent.selectOptions(select, "rent");
    userEvent.clear(valueField);
    userEvent.type(valueField, "50");
    userEvent.click(button);
    //don't work because userEvent does not work with input date(no set value)'
    screen.debug();
  });
});
