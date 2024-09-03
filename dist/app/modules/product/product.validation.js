"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const createProduct = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name must required" }).min(5).trim(),
    description: zod_1.z
        .string({ required_error: "Description must required" })
        .trim(),
    price: zod_1.z
        .number({ required_error: "Product price must required" })
        .positive({ message: "Price can't be a negetive number" }),
    regularPrice: zod_1.z
        .number()
        .positive({ message: "Price can't be a negetive number" })
        .optional(),
    inStock: zod_1.z
        .number({ required_error: "Price can't be a negetive number" })
        .positive(),
    cupponId: zod_1.z.string().optional(),
    brandId: zod_1.z.string({ required_error: "Brand ID must required" }),
    categoryId: zod_1.z.string({ required_error: "Brand ID must required" }),
    subCategoryId: zod_1.z.string().optional(),
});
exports.productValidation = { createProduct };
