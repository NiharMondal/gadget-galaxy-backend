"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const zod_1 = require("zod");
const createCategory = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Category name is required" }).trim(),
    subCategoryId: zod_1.z.string({}).optional()
});
exports.categoryValidation = { createCategory };
