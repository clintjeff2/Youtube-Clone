const express = require('express');
const commentController = require('./../controllers/commentController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
	.route('/')
	.get(
		authController.protect,
		authController.restrictTo('admin'),
		commentController.getAllComments
	);

router
	.route('/:videoId')
	.get(authController.protect, commentController.getVideoComments)
	.post(
		authController.protect,
		authController.restrictTo('admin', 'viewer'), //For now a tuber cannot comment on any video
		commentController.postComment
	);
module.exports = router;
