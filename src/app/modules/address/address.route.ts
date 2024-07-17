import { Router } from "express";
import { addressController } from "./address.controller";

const router = Router();

router
	.route("/")
	.post(addressController.insertIntoDB)
	.get(addressController.getAllFromDB);

router
	.route("/:id")
	.get(addressController.getById)
	.patch(addressController.updateIntoDB)
	.delete(addressController.deleteFromDB);

export const addressRoutes = router;
