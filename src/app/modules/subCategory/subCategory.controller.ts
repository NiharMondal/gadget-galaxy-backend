import { Request, Response } from "express";
import { subCategoryServices } from "./subCategory.services";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await subCategoryServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Sub Category created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const result = await subCategoryServices.getAllFromDB();

	sendResponse(res, {
		statusCode: 200,
		message: "All Sub Categories retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await subCategoryServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Sub Category retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await subCategoryServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Sub Category updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await subCategoryServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 200,
		message: "Sub Category deleted successfully",
		data: result,
	});
});
export const subCategoryController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
