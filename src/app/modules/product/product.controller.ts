
import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { productServices } from "./product.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await productServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Product created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const query = req.query;

	const result = await productServices.getAllFromDB(query as TQuery);

	sendResponse(res, {
		statusCode: 200,
		message: "All Products retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await productServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Product retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await productServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 201,
		message: "Product updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await productServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 201,
		message: "Product deleted successfully",
		data: result,
	});
});
const softDeleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await productServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 201,
		message: "Product deleted successfully",
		data: result,
	});
});
export const productController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
	softDeleteFromDB
};
