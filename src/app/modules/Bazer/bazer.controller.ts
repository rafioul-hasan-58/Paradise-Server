import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bazerServices } from "./bazer.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";



const doingBazer = catchAsync(async (req: Request, res: Response) => {
    const result = await bazerServices.doingBazer(req.body)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Bazer added successfully",
        data: result
    });
});
const getAllBazer = catchAsync(async (req: Request, res: Response) => {
    const result = await bazerServices.getAllBazer(req.query);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "All Bazer retrived successfully",
        data: result
    });
});

export const bazerController = {
    doingBazer,
    getAllBazer
}