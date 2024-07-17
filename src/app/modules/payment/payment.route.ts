import { Router } from "express";
import { paymentController } from "./payment.controller";

const router = Router();



router
	.route("/")
	.post(paymentController.insertIntoDB)
	.get(paymentController.getAllFromDB);

router
	.route("/:id")
	.get(paymentController.getById)
	.patch(paymentController.updateIntoDB)
	.delete(paymentController.deleteFromDB);

export const subCategoryRoutes = router;
