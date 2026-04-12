import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex = /^(?!.*\.\.)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const usernameRegex =/^[a-zA-Z0-9_]+$/;

const signupSchema = z.object({
    fullName: z
        .string()
        .min(4, "Full name must be at least 3 characters ")
        .max(50, "Full name is too long")
        .trim(),

    userName:z
    .string()
    .min(3  ,"Username must be at least 3 characters")
    .max(30 ,"Username too long")
    .regex(usernameRegex, "Only letters, numbers, underscore")
    .trim(),

    email: z
        .string()
        .regex(emailRegex, "Invalid email format")
        .toLowerCase()
        .trim(),

    password: z
        .string()
        .regex(passwordRegex, "Password must include uppercase, lowercase, number, and special character")
})

export default signupSchema