type categories = "food" | "rent" | "salary";
export interface Item {
  date: Date;
  category: categories;
  title: string;
  value: number;
}
