import { Request, Response, Router } from 'express'
import ProductControllers from '../controllers/products.controllers'
import { logMiddleware } from '../middleware/log'
const router = Router()

router.get('/getall', ProductControllers.getAll)
router.get('/getone/:id',logMiddleware, ProductControllers.getOne)
router.post('/create', ProductControllers.post)
router.put('/update/:id', ProductControllers.update)
router.delete('/delete/:id', ProductControllers.delete)

export {router}