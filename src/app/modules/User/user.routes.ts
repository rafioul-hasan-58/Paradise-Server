import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidations } from "./user.validation";


const router = Router();

router.post('/', validateRequest(userValidations.createUserValidationSchema), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', validateRequest(userValidations.updateUserValidationSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);



export const userRouter = router