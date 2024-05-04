import express from 'express';
import { forr } from '../controllers/user.controller.js';

const router=express.Router();

router.get('/',forr);

export default router;