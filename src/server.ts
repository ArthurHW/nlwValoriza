import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express";
import "./database";
import "express-async-errors";
import cors from "cors"

import { router } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors)

app.use(express.json());

app.use(router);

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})