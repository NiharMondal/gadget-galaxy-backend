import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFoundPage from "./app/middleware/notFound";
import { rootRouter } from "./app/routes";

const app: Application = express();

app.use(express.json());

app.use(cors({origin:"https://gadget-galaxy-smoky.vercel.app/", credentials:true}));

//root router
app.use("/api/v1", rootRouter);

//not found
app.use("*", notFoundPage);

//global error handler
app.use(globalErrorHandler);

export default app;
