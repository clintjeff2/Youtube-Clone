const mongoose = require('mongoose');
const validator = require('validator');

const channelSchema = mongoose.Schema({
	name: {
		type: String,
		maxLength: [50, 'A channel name must be atmost 50 characters'],
		minLength: [4, 'Channel name shoud be atleast 4 characters'],
		unique: true,
	},
	coverPhoto: {
		type: String,
	},
	logo: String,
	startDate: {
		type: Date,
		default: Date.now(),
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: [true, 'A user must be creating a channel'],
	},
	country: {
		type: String,
		required: true,
	},
});


const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;