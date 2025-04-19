import { Types } from "mongoose";

export interface IBazer {
    user_id: Types.ObjectId,
    date: Date,
    items: string[],
    amount: number
}