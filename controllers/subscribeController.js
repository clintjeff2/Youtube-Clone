const Subscribe = require('./../models/subscribeModel');

exports.subscribeTo = async (req, res, next) => {
	try {
		const channel = req.params.id;
		const user = req.user._id;
		let subscribe;

		const subsChannel = await Subscribe.findOne({ user });

		if (subsChannel) {
			subscribe = await Subscribe.findByIdAndUpdate(
				subsChannel._id,
				{
					channel: [...subsChannel.channel, { id: channel }],
				},
				{
					new: true,
				}
			);
		} else {
			subscribe = await Subscribe.create({ user, channel: [{ id: channel }] });
		}

		res.status(201).json({
			status: 'Success',
			subscribe,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			error: err,
		});
	}
};
exports.unSubscribe = async (req, res, next) => {
	try {
		const channel = req.params.id;
		const user = req.user._id;
		let subscribe;

		const subsChannel = await Subscribe.findOne({ user });

		if (subsChannel) {
			console.log(subsChannel.channel, 111111);
			const channels = subsChannel.channel.filter(
				(chan) => chan.id != channel // not !== because on the id comming from the database is an object and not a string
			);
			console.log(channels, channel);

			subscribe = await Subscribe.findByIdAndUpdate(
				subsChannel._id,
				{
					channel: channels,
				},
				{
					new: true,
				}
			);
		} else {
			return next(new Error('You have never subscribed to this channel'));
		}

		res.status(201).json({
			status: 'Success',
			subscribe,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			error: err,
		});
	}
};

exports.getAllSubscribers = async (req, res, next) => {
	try {
		const subscribers = await Subscribe.find();
		res.status(201).json({
			status: 'Success',
			results: subscribers.length,
			subscribers,
		});
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			error: err,
		});
	}
};
