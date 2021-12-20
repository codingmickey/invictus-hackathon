import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  addRequest,
  showAllRequests,
  showRequesById,
  removeRequest,
} from '../controllers/requestController.js';

const router = express.Router();

router.route('/addRequest').post(protect, addRequest);
router.route('/show/:id').get(protect, showRequesById);
router.route('/showAll').get(protect, showAllRequests);
router.route('/delete/:id').delete(protect, removeRequest);

export default router;
