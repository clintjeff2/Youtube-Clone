const vLike = require('./../models/vLikesModel');
const Video = require('./../models/videoModel');

exports.likesCount = async (req, res, next) => {
	const videoId = req.params.id;
	const video = await Video.findById(videoId);
	const checkLike = await vLike.findOne({ user: req.user._id });
	let statusCode, data;

	if (!video) return next(new Error('This video does not exit!'));

	if (checkLike) {
		const updatedVideo = await Video.findOneAndUpdate(
			{ _id: videoId },
			{ likes: video.likes - 1 },
			{ new: true }
		);
		const vLikes = await vLike.deleteOne({ user: req.user._id });

		statusCode = 204;
		data = null;
	} else {
		const updatedVideo = await Video.findOneAndUpdate(
			{ _id: videoId },
			{ likes: video.likes + 1 },
			{ new: true }
		);
		const vLikes = await vLike.create({ user: req.user._id, video: videoId });
		statusCode = 201;
		data = { updatedVideo, vLikes };
	}

	res.status(statusCode).json({
		status: 'success',
		data,
	});
};
