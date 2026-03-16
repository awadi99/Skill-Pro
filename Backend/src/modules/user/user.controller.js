import { getProfileService,updateProfileService } from "./user.service.js";

export const getProfile = async(req,res)=>{
    try{
        const user = await getProfileService(req.user.userId);
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};


export const updateProfile = async(req,res)=>{
    try{
        const updatedUser = await updateProfileService(
            req.user.userId,
            req.body
        );
        res.status(200).json(updatedUser);

    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};