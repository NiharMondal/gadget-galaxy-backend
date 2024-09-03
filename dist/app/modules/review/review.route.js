"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryRoutes = void 0;
const express_1 = require("express");
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
router
    .route("/")
    .post(review_controller_1.reviewController.insertIntoDB)
    .get(review_controller_1.reviewController.getAllFromDB);
router
    .route("/:id")
    .get(review_controller_1.reviewController.getById)
    .patch(review_controller_1.reviewController.updateIntoDB)
    .delete(review_controller_1.reviewController.deleteFromDB);
exports.subCategoryRoutes = router;
