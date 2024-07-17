import { Response } from "express";
type TResponseData<T> = {
	statusCode: number;
	message: string;
	data: T;
};
const sendResponse = <T>(res: Response, obj: TResponseData<T>) => {
	res.status(obj.statusCode).json({
		success: true,
		message: obj.message,
		result: obj.data,
	});
};
export default sendResponse;