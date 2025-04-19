import { prisma } from "../../utils/prisma"
import { IExpense } from "./expense.interface"


const addMoney = async (payload: IExpense) => {
    const isUserExists = await prisma.user.findUnique({
        where: {
            id: payload?.user_id.toString()
        }
    })
    if (!isUserExists) {
        throw new Error("User doesnot exists")
    }
    const result = await prisma.expense.create({
        data: {
            amount: payload?.amount,
            date: payload?.date,
            user_id: payload?.user_id.toString(),
            purpose: payload?.purpose,
            transaction_type: payload?.transaction_type
        }
    })
    return result
}

export const expenseServices = {
    addMoney,
}