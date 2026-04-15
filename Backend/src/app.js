import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import authRoutes from "./modules/auth/auth.router.js"
import userRoutes from "./modules/user/user.router.js";
import passport from 'passport';
import "./modules/auth/google.strategy.js";


const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
}));
app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("api is running");
});

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes);


app.use(passport.initialize());

export default app;