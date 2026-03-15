import User from './auth.model.js';

export const findUserByEmail =async(email)=>{
    return await User.findOne({email}).select("+password");
};

export const  createUser = async(data)=>{
    return await User.create(data);
};

export const  findUserById = async(id)=>{
    return await User.findById(id);
}