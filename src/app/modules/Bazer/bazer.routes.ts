import { Router } from "express";
import { bazerController } from "./bazer.controller";



const router = Router();

router.post('/add-bazer', bazerController.doingBazer);
router.get('/get-all-bazer', bazerController.getAllBazer);


export const bazerRouter = router;