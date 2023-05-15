import express from 'express';
import {
  updateService,
  postService,
  getServices,
  deleteService,
  getServicesByUser,
} from '../controller/services.js';
import { verifyUser } from '../middlewares/verify.js';

const router = express.Router();

router.post('/createService', verifyUser, postService);
router.put('/updateService/:id', verifyUser, updateService);
router.get('/getService', verifyUser, getServicesByUser);
router.get('/', getServices);
router.delete('/deleteService/:id', deleteService);

export default router;
