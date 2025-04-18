import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app: Application = express();
import status from "http-status";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Ph university server is running"
    })
})

app.use('/api', router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(status.NOT_FOUND).json({
        success: false,
        message: "API not found",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found"
        }
    })
})



export default app