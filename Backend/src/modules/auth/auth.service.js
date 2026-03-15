import bcrypt from 'bcryptjs';
import { findUserByEmail,createUser } from './auth.repository.js';

export const signupService = async({userName,fullName,email,password})=>{
    const existingUser = await findUserByEmail(email);
    
    if(existingUser){
        throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await createUser({
        userName,
        fullName,
        email,
        password:hashedPassword
    });

    return user;
    
};

export const loginService = async({email,password})=>{
    const user = await findUserByEmail(email);
    
    if(!user){
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error("Invalid email or password");
    }
    return user;
};

