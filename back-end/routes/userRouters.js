import express from 'express';
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  registerUser,
  updateUser,
  updateUserProfile,
} from '../controllers/userControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);

router.post('/login', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
