import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path:path.resolve(__dirname,"../../.env")});

export const protect =(req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({
            message:"Not authorized"
        });
    }

    try{
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user =decode;
        next();
    }
    catch(error){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
};