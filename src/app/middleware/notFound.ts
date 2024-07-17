import { NextFunction, Request, Response } from "express";

 const notFoundPage = (req:Request,res:Response,next:NextFunction)=>{
   res.status(404).json({
      success:false,
      message: "Your requested path is not valid",

   })
   next()
};

export default notFoundPage;


