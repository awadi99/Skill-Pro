import User from "../auth/auth.model.js";

export const findUserById = async(id)=>{
    return await User.findById(id).select("-password");
}

export const updateUserById = async(id,data)=>{
    return await User.findByIdAndUpdate(id,data,{
        new:true,
    }).select("-password");
};