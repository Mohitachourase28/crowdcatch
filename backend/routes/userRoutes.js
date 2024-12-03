// routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser); // POST /api/users/register
router.post('/login', loginUser);       // POST /api/users/login
router.get('/profile', protect, getUserProfile); // GET /api/users/profile (Protected)

export default router;
