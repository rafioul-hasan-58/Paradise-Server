import { Router } from "express";
import { userRouter } from "../modules/User/user.routes";
import { expenseRouter } from "../modules/Expense/expense.routes";
import { bazerRouter } from "../modules/Bazer/bazer.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRouter
    },
    {
        path: '/expense',
        route: expenseRouter
    },
    {
        path: '/bazers',
        route: bazerRouter
    }

]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router