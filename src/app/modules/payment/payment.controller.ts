import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { paymentServices } from "./payment.services";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
	const body = req.body;
	const result = await paymentServices.insertIntoDB(body);

	sendResponse(res, {
		statusCode: 201,
		message: "Payment created successfully",
		data: result,
	});
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
	const result = await paymentServices.getAllFromDB();

	sendResponse(res, {
		statusCode: 200,
		message: "All Payments retrived successfully",
		data: result,
	});
});

const getById = catchAsync(async (req: Request, res: Response) => {
	const result = await paymentServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Single Payment retrived successfully",
		data: result,
	});
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await paymentServices.updateIntoDB(id, req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Payment updated successfully",
		data: result,
	});
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await paymentServices.deleteFromDB(id);

	sendResponse(res, {
		statusCode: 200,
		message: "Payment deleted successfully",
		data: result,
	});
});
export const paymentController = {
	insertIntoDB,
	getAllFromDB,
	getById,
	updateIntoDB,
	deleteFromDB,
};
