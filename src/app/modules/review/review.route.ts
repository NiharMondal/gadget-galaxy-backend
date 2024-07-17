import { Router } from "express";
import { reviewController } from "./review.controller";

const router = Router();
router
	.route("/")
	.post(reviewController.insertIntoDB)
	.get(reviewController.getAllFromDB);

router
	.route("/:id")
	.get(reviewController.getById)
	.patch(reviewController.updateIntoDB)
	.delete(reviewController.deleteFromDB);

export const subCategoryRoutes = router;
