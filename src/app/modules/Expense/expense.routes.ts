import { Router } from "express";
import { expenseController } from "./expense.controller";


const router = Router();

router.post('/add-money', expenseController.addMoney);


export const expenseRouter = router