import { Router } from "express";
import { categoryController } from "./category.controller";
import authGaurd from "../../middleware/authGaurd";
import { Role } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { categoryValidation } from "./category.validation";

const router = Router();


	
router.get("/group-by", categoryController.catSubCatName);
router
	.route("/")
	.post(
		// authGaurd(Role.ADMIN, Role.SUPER_ADMIN),
		validateRequest(categoryValidation.createCategory),
		categoryController.insertIntoDB
	)
	.get(categoryController.getAllFromDB);



router
	.route("/:id")
	.get(categoryController.getById)
	.patch(categoryController.updateIntoDB)
	.delete(categoryController.deleteFromDB);

export const categoryRoutes = router;
