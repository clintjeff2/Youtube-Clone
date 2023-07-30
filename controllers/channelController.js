const Channel = require('./../models/channelModel');

exports.createChannel = async (req, res, next) => {
	try {
		const { name, coverPhoto, logo, country } = req.body;
		const userId = req.user._id;

		const channel = await Channel.create({
			name,
			coverPhoto,
			logo,
			user: userId,
			country,
		});
		res.status(201).json({
			status: 'success',
			channel,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};
exports.getAllChannels = async (req, res, next) => {
	try {
		const channels = await Channel.find();

		if (!channels) return next(new Error('No channel found!'));

		res.status(200).json({
			status: 'success',
			results: channels.length,
			channels,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};
exports.getChannel = async (req, res, next) => {
	try {
		const { id } = req.params;
		const channel = await Channel.findById(id);

		if (!channel)
			return next(new Error(`The channel with id ${id} does not exist.`));

		res.status(200).json({
			status: 'success',
			channel,
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: err.message,
			error: err,
		});
	}
};
