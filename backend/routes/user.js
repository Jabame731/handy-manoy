import express from 'express';
import {
  createAdminUserAccount,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controller/user.js';
import { checkUserRole, verifyUser } from '../middlewares/verify.js';

const router = express.Router();

router.post(
  '/createAdminUser',
  verifyUser,
  checkUserRole,
  createAdminUserAccount
);

router.put('/updateUser/:id', updateUser);
router.get('/', verifyUser, checkUserRole, getUsers);
router.get('/:id', verifyUser, checkUserRole, getUser);
router.delete('/:id', verifyUser, checkUserRole, deleteUser);

export default router;
