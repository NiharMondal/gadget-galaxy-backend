import { z } from "zod";

const createProduct = z.object({
	name: z.string({ required_error: "Name must required" }).min(5).trim(),
	description: z
		.string({ required_error: "Description must required" })
		.trim(),
	price: z
		.number({ required_error: "Product price must required" })
		.positive({ message: "Price can't be a negetive number" }),
	regularPrice: z
		.number()
		.positive({ message: "Price can't be a negetive number" })
		.optional(),
	inStock: z
		.number({ required_error: "Price can't be a negetive number" })
		.positive(),
	cupponId: z.string().optional(),
	brandId: z.string({ required_error: "Brand ID must required" }),
	categoryId: z.string({ required_error: "Brand ID must required" }),
	subCategoryId: z.string().optional(),
});

export const productValidation = { createProduct };
