import express from 'express';
import { ologin, callback, jwtToken } from '../controllers/oauth.js';
import {
  register,
  login,
  logoutUser,
  showMyProfile,
  updateUser,
} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';
import verify from '../controllers/authVerify.js';

const router = express.Router();

router.route('/register').post(register); // Register Route
router.route('/login').post(login); // Login Route
router.route('/verify').get(verify);
router.route('/isLogged').post(protect);
router.route('/logout').post(protect, logoutUser);
router.route('/showMe').get(protect, showMyProfile);
router.route('/update').put(protect, updateUser);
// (req, res) => { // auth logout
//   // handle with passport
// });
// OAUTH Routes for GOOGLE, login with google
router.route('/auth/google').get(ologin);
// callback route for google to redirect
router.route('/login/google/redirect').get(callback);

export default router;
