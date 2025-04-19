import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { expenseServices } from "./expense.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";


const addMoney = catchAsync(async (req: Request, res: Response) => {
    const result = await expenseServices.addMoney(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Money added successfully",
        data: result
    })
})


export const expenseController = {
    addMoney,
    
}