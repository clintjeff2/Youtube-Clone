const mongoose = require('mongoose');
const validator = require('validator');

const subscribeSchema = mongoose.Schema({
	channel: [
		{
			id: {
				type: mongoose.Schema.ObjectId,
				ref: 'Channel',
				required: [true, 'A video must belong to a channel'],
			},
			subsDate: {
				type: Date,
				default: Date.now(),
			},
		},
	],
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: [true, 'A subscription must belong to a user'],
	},
	subscribeDate: {
		type: Date,
		default: Date.now(),
	},
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = Subscribe;
