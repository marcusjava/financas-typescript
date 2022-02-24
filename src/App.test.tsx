import { render, screen, within } from "@testing-library/react";
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

describe("testing add area", () => {});
