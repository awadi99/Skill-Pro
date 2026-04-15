import User from '../modules/auth/auth.model.js';

export const generateUsername = async (name)=>{
    
    const base = name.toLowerCase().replace(/\s+/g, "");
    let username;
    let exists= true;

    while(exists){

        const random = Math.floor(Math.random()*10000) ;
        username = `${base}${random}`;

        const user = await User.findOne({userName : username});
        exists = !!user;

    }
    return username;
};