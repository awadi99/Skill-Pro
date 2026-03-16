import express from "express";
import { register,login, logout } from "./auth.controller.js";
import { signupSchema,loginSchema } from "../../validators/auth.validator.js";
import { validate } from "../../middlewares/validate.middleware.js";
const router = express.Router();

router.post("/register",validate(signupSchema),register);
router.post("/login",validate(loginSchema), login);
router.post("/logout",logout);
export default router;