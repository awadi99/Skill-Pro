import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;

export const editProfileSchema = z.object({
    fullName: z.string().trim().min(4, "Full name must be at least 4 characters").max(50),
    userName: z.string().trim().min(3, "Username must be at least 3 characters").regex(usernameRegex, "Only letters, numbers, and underscores"),
    email: z.string().email("Invalid email format").trim(),
    // Password is only validated if the user types something
    password: z.string().refine((val) => val === "" || passwordRegex.test(val), {
        message: "Password must include uppercase, lowercase, number, and special character",
    }).optional(),
});

export default editProfileSchema;