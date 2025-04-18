import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await userServices.createUser(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "User created successfully",
        data: result
    })
})
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await userServices.getAllUsers();
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "User fetched successfully",
        data: result
    })
})
const getUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await userServices.getUser(id);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "User fetched successfully",
        data: result
    })
})
const updateUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await userServices.updateUser(id, req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "User updated successfully",
        data: result
    })
})
const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    await userServices.deleteUser(id);
    res.status(status.OK).json({
        success: true,
        message: "User deleted successfully"
    })
})


export const userController = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}