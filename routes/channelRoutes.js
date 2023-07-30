const express = require('express');
const channelController = require('./../controllers/channelController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router
	.route('/')
	.get(
		authController.protect,
		authController.restrictTo('admin'),
		channelController.getAllChannels
	)
	.post(
		authController.protect,
		authController.restrictTo('admin', 'tuber'),
		channelController.createChannel
	);

router.route('/:id').get(authController.protect, channelController.getChannel);

module.exports = router;
