import { Router } from "express";
import OrderControllers from "../controllers/order.controllers";

const router = Router()

router.get('/',OrderControllers.getOne)

export { router }