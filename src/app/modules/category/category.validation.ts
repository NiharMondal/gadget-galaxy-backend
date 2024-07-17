import { z } from "zod";

const createCategory = z.object({
	name: z.string({ required_error: "Category name is required" }).trim(),
   subCategoryId :z.string({}).optional()
});

export const categoryValidation = { createCategory };
