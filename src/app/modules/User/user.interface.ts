import { Expense, Meal } from "../../../../generated/prisma";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin";
  photo?: string;
  Meal?: Meal[];
  Expense?: Expense[];
  isDeleted: boolean;
}
