import express from 'express';
import { updateService, postService } from '../controller/services.js';
import { verifyUser } from '../middlewares/verify.js';

const router = express.Router();

router.post('/createService', verifyUser, postService);
router.put('/id', verifyUser, updateService);

export default router;
