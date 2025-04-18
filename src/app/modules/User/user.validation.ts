import { boolean, string, z } from "zod";



const createUserValidationSchema = z.object({
    name: string(),
    email: string(),
    phone: string(),
})
const updateUserValidationSchema = z.object({
    name: string().optional(),
    email: string().optional(),
    phone: string().optional(),
    photo: string().optional(),
    isDeleted: boolean().optional()
})


export const userValidations = {
    createUserValidationSchema,
    updateUserValidationSchema
}