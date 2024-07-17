import { Request, Response } from "express";
import { authServices } from "./auth.services";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";

const register = catchAsync(async (req: Request, res: Response) => {

	const result = await authServices.register(req.body);

	sendResponse(res, {
		statusCode: 201,
		message: "User created successfully",
		data: result,
	});
});

const login = catchAsync(async (req: Request, res: Response) => {
	const result = await authServices.login(req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Logged in successfully!",
		data: result,
	});
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
	const result = await authServices.forgotPassword(req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Nevigating to password change page",
		data: result,
	});
});
const changePassword = catchAsync(async (req: Request, res: Response) => {
	const result = await authServices.changePassword({
		payload: req.body,
		user: req.user,
	});

	sendResponse(res, {
		statusCode: 200,
		message: "Password changed successfully",
		data: result,
	});
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
	const user = req.user;
	const result = await authServices.resetPassword({ user, payload: req.body });

	sendResponse(res, {
		statusCode: 200,
		message: "Password reseted successfully",
		data: result,
	});
});

export const authController = {
	register,
	login,
	forgotPassword,
	changePassword,
	resetPassword,
};
