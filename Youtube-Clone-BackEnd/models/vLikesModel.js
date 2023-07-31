const mongoose = require('mongoose');
const validator = require('validator');

const vLikeSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		// required: [true, 'A like must be made by a user'],
	},
	video: {
		type: mongoose.Schema.ObjectId,
		ref: 'Video',
		required: [true, 'A like must belong to a video'],
	},
});

const vLike = mongoose.model('vLike', vLikeSchema);
module.exports = vLike;
