import { loginService, signupService } from "./auth.service.js";
import {generateToken} from "../../lib/utils.js";

export const register = async(req,res)=>{
    try{
        const user = await signupService(req.body);

        generateToken(user._id,res);

        res.status(201).json({
            _id:user._id,
            userName:user.userName,
            fullName:user.fullName,
            email:user.email
        });

    }catch(error){

        res.status(400).json({
            message: error.message
        });
    }
};


export const login = async (req,res)=>{
    try{

        const user = await loginService(req.body);

        generateToken(user._id,res);

        res.json({
            _id:user._id,
            userName:user.userName,
            fullName:user.fullName,
            email:user.email,
        });

    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};


export const logout = async(req,res)=>{

    try{
        res.cookie("jwt","",{
            httpOnly:true,
            expires: new Date(0)
        });

        res.status(200).json({
            message:"Logged out successfully"
        });
    }catch(error){
        res.status(500).json({
            message:"Internal server error"
        });
    }
};