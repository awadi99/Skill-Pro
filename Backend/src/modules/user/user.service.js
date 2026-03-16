import { findUserById,updateUserById } from "./user.repository.js";

export const getProfileService = async(userId)=>{
    const user = await findUserById(userId);
    if(!user){
        throw new Error("User not found");
    }
    return user;
};

export const updateProfileService =async(userId,data)=>{
    const updateUser = await updateUserById(userId,data);
    return updateUser;
};