const Comment = require('./../models/commentModel');

exports.postComment = async (req, res, next) => {
	try {
		const { message } = req.body;
		const userId = req.user._id;
		const { videoId } = req.params;

		if (!message) return next(new Error('Enter a message'));

		const comment = await Comment.create({
			message,
			user: userId,
			video: videoId,
		});

		res.status(201).json({
			status: 'Success',
			comment,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			error: err,
		});
	}
};

exports.getAllComments = async (req, res, next) => {
	try {
		const comments = await Comment.find();

		res.status(200).json({
			status: 'success',
			results: comments.length,
			comments,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};
exports.getVideoComments = async (req, res, next) => {
	try {
		const { videoId } = req.params;
		const videoComments = await Comment.find({ video: videoId });

		res.status(200).json({
			status: 'success',
			results: videoComments.length,
			comments: videoComments,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};
exports.delComment = async (req, res, next) => {
	try {
		const { id } = req.params;

		const comment = await Comment.findByIdAndDelete(id);

		res.status(204).json({
			status: 'success',
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
}; //only a user can delete his/her comments

exports.likeComments = async (req, res, next) => {};
exports.disLikeComment = async (req, res, next) => {};
