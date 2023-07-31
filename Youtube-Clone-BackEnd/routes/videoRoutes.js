const express = require('express');
const videoController = require('./../controllers/videoController');
const authController = require('./../controllers/authController');
const vLikesController = require('./../controllers/vLikesController');

const router = express.Router({ mergeParams: true });

router
	.route('/')
	.get(authController.protect, videoController.getVideoOnChannel)
	.post(
		authController.protect,
		authController.restrictTo('admin', 'tuber'),
		videoController.uploadVideo
	);

//increase likes
// router
// 	.route('/:id/like')
// 	.patch(authController.protect, vLikesController.likesInc);

module.exports = router;
