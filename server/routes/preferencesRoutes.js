const { Router } = require('express');
const {
  handleMode,
  handleTheme,
  handleLanguage,
} = require('../controllers/preferencesController');
const { verifyToken } = require('../controllers/authController');

const preferencesRouter = Router();

preferencesRouter.use(verifyToken);
preferencesRouter.route('/updateMode').post(handleMode);
preferencesRouter.route('/updateTheme').post(handleTheme);
preferencesRouter.route('/updateLanguage').post(handleLanguage);

module.exports = preferencesRouter;

