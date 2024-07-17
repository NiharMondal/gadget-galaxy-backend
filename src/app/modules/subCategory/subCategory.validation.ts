import { z } from "zod";

const createSubCategory = z.object({
	name: z.string({ required_error: "Brand name is required" }).trim(),
});

export const subCategoryValidation = { createSubCategory };
