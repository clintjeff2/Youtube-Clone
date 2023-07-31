const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const videoRouter = require('./../routes/videoRoutes');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router
	.route('/')
	.get(
		authController.protect,
		authController.restrictTo('admin', 'tuber'),
		userController.getAllUsers
	);
router
	.route('/:id')
	.get(authController.protect, userController.updatePassword)
	.delete(
		authController.protect,
		authController.restrictTo('admin'),
		userController.deleteUser
	);

router.route('/logout').get(authController.protect, authController.logout);

module.exports = router;
