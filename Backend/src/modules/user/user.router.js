import express from 'express';
import { protect } from '../../middlewares/auth.middleware.js';
import {getProfile, updateProfile, uploadProfilePic} from './user.controller.js';
import { validate } from '../../middlewares/validate.middleware.js';
import {updateSchema } from '../../validators/user.validator.js';
import upload from '../../middlewares/user.upload.middleware.js';

const router = express.Router();

router.get("/me", protect, getProfile);

router.put("/update",validate(updateSchema),protect, updateProfile);

router.post("/upload-profile",protect,upload.single("profilePic"),uploadProfilePic);
export default router;