import Joi from 'joi';


const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const signupSchema = Joi.object({
    userName:Joi.string()
    .min(3)
    .max(10)
    .required()
    .messages({
        "string.empty":"User name required",
        "string.min":"User name must be at least 3 characters"
    }),

    fullName:Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        "string.empty":"Full name is required",
        "string.min":"Full name must be at least 3 characters"
    }),

    email:Joi.string()
    .email()
    .required()
    .messages({
        "string.email":"Invaild email format",
        "string.empty":"Email is required"
    }),

    password:Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
        "string.pattern.base":
        "Password must contain uppercase lowercase, number and special character",
        "string.empty":"Password is required"
    })



});


export const loginSchema = Joi.object({
    email:Joi.string()
    .email()
    .required(),

    password:Joi.string()
    .required()
});