import { Request, Response } from "express";

import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { brandServices } from "./brand.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await brandServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Brand created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const result = await brandServices.getAllFromDB();

	sendResponse(res, {
		statusCode: 200,
		message: "All Brands retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await brandServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Brands retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await brandServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 201,
		message: "Brand updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await brandServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 201,
		message: "Brand deleted successfully",
		data: result,
	});
});
export const brandController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
