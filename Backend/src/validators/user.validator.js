import Joi from "joi";

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const updateSchema = Joi.object({
    userName:Joi.string()
    .min(3)
    .max(10)
    .messages({
        "string.empty":"User name required",
        "string.min":"User name must be at least 3 characters"
    }),

    fullName:Joi.string()
    .min(3)
    .max(30)
    .messages({
        "string.empty":"Full name is required",
        "string.min":"Full name must be at least 3 characters"
    }),

    email:Joi.string()
    .email()
    .messages({
        "string.email":"Invaild email format",
        "string.empty":"Email is required"
    }),

    password:Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .messages({
        "string.pattern.base":
        "Password must contain uppercase lowercase, number and special character",
        "string.empty":"Password is required"
    })



});


