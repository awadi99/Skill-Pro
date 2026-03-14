import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotevn from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
}));
app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

export default app;