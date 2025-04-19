import { Types } from "mongoose"


export interface IExpense {
    amount: number,
    date?: Date,
    user_id: Types.ObjectId
    purpose: 'rent' | 'meal',
    transaction_type: 'add' | 'get'
}