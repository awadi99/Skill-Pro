import mongoose  from "mongoose";

const authSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        maxLength :30,
    },
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match:[
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    "Please enter a valid email"
        ]
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/]
        ,select:false
    },

    profilePic:{
        type:String,
        default: ""
    },

    xp:{
        type:Number,
        default:0,
    },
    rank:{
        type:String,
        default:"Beginner"
    }
    
},{timestamps:true});

const User = mongoose.model("newUser",authSchema);

export default User;