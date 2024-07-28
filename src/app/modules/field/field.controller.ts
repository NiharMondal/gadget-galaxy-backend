import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync"
import { fieldSerces } from "./field.services";
import sendResponse from "../../../utils/sendResponse";

const getProductField = catchAsync(async(req:Request, res:Response)=>{
    const result = await fieldSerces.getProductField();

    sendResponse(res, {
        statusCode: 200,
        message: "Property fetched successfully",
        data:result
    })
});

export const fieldController = {getProductField}