import express, {Application, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running perfectly'
    });
});

app.listen(PORT, () => {
    console.log(`Server is flying on: http:localhost:${PORT}`);
});