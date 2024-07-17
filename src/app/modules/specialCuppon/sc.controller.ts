import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { scServices } from "./sc.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await scServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Special Cuppon created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const result = await scServices.getAllFromDB();

	sendResponse(res, {
		statusCode: 200,
		message: "All Special Cuppons retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await scServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Special Cuppon retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await scServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Special Cuppon updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await scServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 200,
		message: "Special Cuppon deleted successfully",
		data: result,
	});
});
export const scController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
