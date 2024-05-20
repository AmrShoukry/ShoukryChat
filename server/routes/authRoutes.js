import { handleSignup } from '../controllers/authController';

const { Router } = require('express');

const authRouter = Router();

authRouter.route('/signup').post(handleSignup);

export default authRouter;

