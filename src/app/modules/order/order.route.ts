import { Router } from "express";
import { orderController } from "./order.controller";


const router = Router();

router
	.route("/")
	.post(orderController.insertIntoDB)
	.get(orderController.getAllFromDB);

router
	.route("/:id")
	.get(orderController.getById)
	.patch(orderController.updateIntoDB)
	.delete(orderController.deleteFromDB);

export const orderRoutes = router;
