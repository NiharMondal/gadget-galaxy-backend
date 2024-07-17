import { Router } from "express";
import { subCategoryController } from "./subCategory.controller";
import authGaurd from "../../middleware/authGaurd";
import { Role } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { subCategoryValidation } from "./subCategory.validation";

const router = Router();
router
	.route("/")
	.post(
		// authGaurd(Role.SUPER_ADMIN, Role.ADMIN),
		validateRequest(subCategoryValidation.createSubCategory),
		subCategoryController.insertIntoDB
	)
	.get(subCategoryController.getAllFromDB);

router
	.route("/:id")
	.get(subCategoryController.getById)
	.patch(subCategoryController.updateIntoDB)
	.delete(subCategoryController.deleteFromDB);

export const subCategoryRoutes = router;
