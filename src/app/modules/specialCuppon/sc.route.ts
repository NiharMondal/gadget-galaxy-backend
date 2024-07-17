import { Router } from "express";
import { scController } from "./sc.controller";

const router = Router();
router
	.route("/")
	.post(scController.insertIntoDB)
	.get(scController.getAllFromDB);

router
	.route("/:id")
	.get(scController.getById)
	.patch(scController.updateIntoDB)
	.delete(scController.deleteFromDB);

export const subCategoryRoutes = router;
