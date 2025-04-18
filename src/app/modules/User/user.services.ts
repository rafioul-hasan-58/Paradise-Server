import { Prisma } from "../../../../generated/prisma";
import { prisma } from "../../utils/prisma";
import { IUser } from "./user.interface";

const createUser = async (payload: IUser) => {
    const result = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            role: payload.role
        }
    })
    return result
}
const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        where: {
            isDeleted: false
        }
    });
    return result
}
const getUser = async (id: string) => {
    const result = await prisma.user.findUnique({
        where: {
            id,
            isDeleted: false
        }
    })
    return result
}
const updateUser = async (id: string, payload: Prisma.UserUpdateInput) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload
    })
    return result
}
const deleteUser = async (id: string) => {
    const result = await prisma.user.update({
        where: { id },
        data: {
            isDeleted: true
        }
    })
    return result
}
export const userServices = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}