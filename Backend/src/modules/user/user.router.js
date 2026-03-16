import express from 'express';
import { protect } from '../../middlewares/auth.middleware.js';
import {getProfile, updateProfile} from './user.controller.js';
import { validate } from '../../middlewares/validate.middleware.js';
import {updateSchema } from '../../validators/user.validator.js';

const router = express.Router();

router.get("/me", protect, getProfile);

router.put("/update",validate(updateSchema),protect, updateProfile);

export default router;