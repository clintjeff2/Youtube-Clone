const mongoose = require('mongoose');
const validator = require('validator');

const videoSchema = mongoose.Schema({
	title: {
		type: String,
		maxLength: [100, 'A title should be atmost 100 characters'],
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	channel: {
		type: mongoose.Schema.ObjectId,
		ref: 'Channel',
		required: [true, 'A video must belong to a channel'],
	},
	views: {
		type: Number,
		default: 0,
	},
	likes: {
		type: Number,
		default: 0,
	},
	postedOn: {
		type: Date,
		default: Date.now(),
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: [true, 'An upload must be categorized by video or shorts'],
		default: 'video', //would remove this when building the front end!
		enum: ['video', 'shorts'],
	},
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
