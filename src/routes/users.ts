import { Router } from "express";
import UserControllers from "../controllers/user.controllers";

const router = Router()

router.get('/getall', UserControllers.getAll)
router.get('/getone/:id',UserControllers.getOne)
router.put('/update/:id', UserControllers.update)
router.delete('/delete/:id', UserControllers.delete)

export { router }