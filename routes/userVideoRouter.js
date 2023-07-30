const express = require('express');
const videoController = require('./../controllers/videoController');
const authController = require('./../controllers/authController');
const vLikesController = require('./../controllers/vLikesController');

const router = express.Router();

router
	.route('/')
	.get(
		authController.protect,
		authController.restrictTo('admin'),
		videoController.getAllVideos
	); //Edit this to give random videos in an instance
router.route('/:id').get(authController.protect, videoController.getVideo);

router
	.route('/:id/like')
	.patch(authController.protect, vLikesController.likesCount);
module.exports = router;
