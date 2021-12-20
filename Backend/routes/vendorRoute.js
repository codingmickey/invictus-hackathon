import express from 'express';
import protect from '../middleware/authMiddleware.js';

import Register from '../controllers/vendorContoller.js';

const router = express.Router();

router.route('/add').post(protect, Register);

export default router;
