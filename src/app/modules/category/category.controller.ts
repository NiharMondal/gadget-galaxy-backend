import { Request, Response } from "express";

import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { categoryServices } from "./category.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await categoryServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Category created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const result = await categoryServices.getAllFromDB();

	sendResponse(res, {
		statusCode: 200,
		message: "All Categories retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await categoryServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Category retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await categoryServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Category updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await categoryServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 200,
		message: "Category deleted successfully",
		data: result,
	});
});
const catSubCatName = catchAsync(async (req: Request, res: Response) => {
	const result = await categoryServices.catSubCatName();

	sendResponse(res, {
		statusCode: 200,
		message: "Category fetched successfully",
		data: result,
	});
});


export const categoryController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
	catSubCatName,
};
