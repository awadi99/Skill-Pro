import express from "express";
import { register, login, logout, googleCallback } from "./auth.controller.js";
import { signupSchema, loginSchema } from "../../validators/auth.validator.js";
import { validate } from "../../middlewares/validate.middleware.js";
import passport from "passport";
const router = express.Router();

router.post("/register", validate(signupSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);


router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/login"
    }),
    googleCallback
);

export default router;