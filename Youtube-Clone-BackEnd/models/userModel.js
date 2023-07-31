const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userModel = mongoose.Schema({
	firstName: {
		type: String,
		default: '',
	},
	lastName: {
		type: String,
		default: '',
	},
	photo: String,
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Invalid email address'],
	},
	password: {
		type: String,
		minLength: [8, 'Password must be atleast 8 characters'],
		required: [true, 'A use must have a password'],
		select: false,
	},
	confirmPassword: {
		type: String,
		required: true,
		validate: {
			validator: function (val) {
				return this.password === val;
			},
			message: 'Passwords must match',
		},
	},
	active: {
		type: Boolean,
		default: true,
		enum: {
			values: [true, false],
			message: "A user' status is either true or false",
		},
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		select: false,
	},
	role: {
		type: String,
		default: 'viewer',
		select: false,
	},
	passwordUpdatedAt: Date,
});

userModel.pre('save', async function (next) {
	try {
		if (this.isModified('password') || this.isNew) {
			//auto generate salt and hash password
			const saltRounds = 12;
			const hash = await bcrypt.hash(this.password, saltRounds);

			this.password = hash;
			this.confirmPassword = undefined;
		}
	} catch (err) {
		console.log(err);
	}
	next();
});

userModel.methods.isCorrectPassword = async function (plainPassword) {
	return await bcrypt.compare(plainPassword, this.password);
};

const User = mongoose.model('User', userModel);

module.exports = User;
