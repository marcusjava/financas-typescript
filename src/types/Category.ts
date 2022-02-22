type colors = "blue" | "brown" | "green";

export interface Category {
  [tag: string]: {
    title: string;
    color: colors;
    expense: boolean;
  };
}
