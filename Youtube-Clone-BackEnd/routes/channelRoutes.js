const express = require('express');
const channelController = require('./../controllers/channelController');
const authController = require('./../controllers/authController');

const subscribeController = require('./../controllers/subscribeController');

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

//Subscribing routes
router
	.route('/:id/subscribe')
	.get(authController.protect, subscribeController.subscribeTo);

router
	.route('/:id/unsubscribe')
	.get(authController.protect, subscribeController.unSubscribe);
router
	.route('/:id/subscribers')
	.get(
		authController.protect,
		authController.restrictTo('admin'),
		subscribeController.getAllSubscribers
	);

module.exports = router;
