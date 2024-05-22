const { Router } = require('express');
const {
  handleSignup,
  handleAccountVerification,
  handleLogin,
  verifyToken,
  handleLogout,
  getCurrentUser,
} = require('../controllers/authController');
const upload = require('../utils/uploadImage');
const authRouter = Router();

authRouter.route('/signup').post(upload.single('profilePicture'), handleSignup);
authRouter.route('/verifyAccount').post(handleAccountVerification);
authRouter.route('/login').post(handleLogin);
authRouter.route('/logout').get(verifyToken, handleLogout);
authRouter.route('/current').get(getCurrentUser);

module.exports = authRouter;

