const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json({
			status: 'success',
			results: users.length,
			users,
		});
	} catch (err) {
		next(err);
	}
};

exports.updatePassword = async (req, res, next) => {
	try {
		const { currentPassword, password, confirmPassword } = req.body;

		const { id } = req.params;
		const user = await User.findOne({ _id: id }).select('+password');

		const correctPassword = await user.isCorrectPassword(currentPassword);

		if (!correctPassword)
			return next(
				new Error(
					'Incorrect password, provide correct current password to update your password'
				)
			);

		if (!password || !confirmPassword)
			return next(new Error('password and confirm password must be provided'));

		// console.log(password, confirmPassword, 1212);
		const updatePass = await User.findById(id);

		updatePass.password = password;
		updatePass.confirmPassword = confirmPassword;
		updatePass.passwordUpdatedAt = Date.now();

		await updatePass.save();

		const { _id, email, firstName, lastName } = updatePass;

		const token = jwt.sign({ id: _id }, process.env.JWT_SECRETE, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});

		res.status(200).json({
			status: 'sucess',
			data: { _id, email, firstName, lastName },
			token,
		});
	} catch (err) {
		return next(err);
	}
};

exports.deleteAccount = async (req, res, next) => {
	try {
		const userId = req.params.id;
		const user = await User.findByIdAndUpdate(userId, { active: false });

		res.status(204).json({
			status: 'success',
		});
	} catch (err) {
		res.status(304).json({
			status: 'failed',
			message: err.message,
			err,
		});
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const userId = req.params.id;
		const user = await User.findByIdAndDelete(userId);

		res.status(204).json({
			status: 'success',
		});
	} catch (err) {
		res.status(304).json({
			status: 'failed',
			message: err.message,
			err,
		});
	}
};
