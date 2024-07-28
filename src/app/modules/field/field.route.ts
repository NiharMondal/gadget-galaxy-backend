import { Router } from "express";
import { fieldController } from "./field.controller";

const router = Router()
router.get("/", fieldController.getProductField)

export const fieldRouter = router;