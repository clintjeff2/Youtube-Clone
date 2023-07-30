const Video = require('./../models/videoModel');

exports.uploadVideo = async (req, res, next) => {
	try {
		const { title, url, description } = req.body;
		const channel = req.params.channelId;

		const video = await Video.create({ title, url, channel, description });

		res.status(201).json({
			status: 'success',
			data: {
				video,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};

exports.getVideo = async (req, res, next) => {
	try {
		const videoId = req.params.id;
		if (!videoId) return next(new Error('Video not available'));

		const video = await Video.findById(videoId);
		if (!video) return next(new Error('Video not found'));

		res.status(200).json({
			status: 'success',
			data: {
				video,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};

exports.getAllVideos = async (req, res, next) => {
	try {
		const videos = await Video.find();

		if (!videos) return next(new Error(`No videos found!`));

		res.status(200).json({
			status: 'success',
			results: videos.length,
			videos,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};

exports.getVideoOnChannel = async (req, res, next) => {
	try {
		const channelId = req.params.channelId;
		const myVideos = await Video.find({ channel: channelId });

		res.status(200).json({
			status: 'success',
			results: myVideos.length,
			videos: myVideos,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};

exports.deleteVideo = async (req, res, next) => {};
