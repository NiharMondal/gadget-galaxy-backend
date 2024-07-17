import { Router } from "express";
import { productController } from "./product.controller";
import { Role } from "@prisma/client";
import authGaurd from "../../middleware/authGaurd";
import validateRequest from "../../middleware/validateRequest";
import { productValidation } from "./product.validation";

const router = Router();

router
	.route("/")
	.post(
		// authGaurd(Role.ADMIN,Role.SUPER_ADMIN),
		validateRequest(productValidation.createProduct),
		productController.insertIntoDB
	)
	.get(productController.getAllFromDB);

router.patch(
	"/soft/:id",
	authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
	productController.softDeleteFromDB
);

router
	.route("/:id")
	.get(productController.getById)
	.patch(
		authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
		productController.updateIntoDB
	)
	.delete(
		authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
		productController.deleteFromDB
	);


	
export const productRoutes = router;
