import { Router } from "express";
import { brandController } from "./brand.controller";
import authGaurd from "../../middleware/authGaurd";
import { Role } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { brandValidation } from "./brand.validation";

const router = Router();
router
	.route("/")
	.post(

		// authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
		validateRequest(brandValidation.createBrand),
		brandController.insertIntoDB)
	.get(brandController.getAllFromDB);

router
	.route("/:id")
	.get(brandController.getById)
	.patch(
		// authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
		brandController.updateIntoDB
	)
	.delete(brandController.deleteFromDB);

	
export const brandRoutes = router;
