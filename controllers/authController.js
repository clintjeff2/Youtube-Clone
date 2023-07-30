const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res, next) => {
	try {
		const { email, password, confirmPassword, role } = req.body;

		let data = { email, password, confirmPassword };
		if (role) data.role = role;

		const newUser = await User.create(data);

		const token = await jwt.sign({ id: newUser._id }, process.env.JWT_SECRETE, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});

		if (!token) throw new Error('Token not created');

		const { firstName, lastName } = newUser;
		res.status(201).json({
			status: 'Success',
			data: {
				email: newUser.email,
				firstName,
				lastName,
				token,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			error: err,
		});
	}
};

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		//check if email and password is provided
		if (!email || !password)
			throw new Error('Both email and password are required');

		//find user
		const user = await User.findOne({ email }).select('+password');

		//check if password is correct
		const passwordCorrect = await user.isCorrectPassword(password);
		if (!passwordCorrect)
			next(new Error('Incorrect password, please try again!'));

		//generate authentication token
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});

		const { firstName, lastName, id } = user;
		res.status(200).json({
			status: 'success',
			data: {
				id,
				email: user.email,
				firstName,
				lastName,
				token,
			},
		});
	} catch (err) {
		next(err);
	}
};

exports.protect = async (req, res, next) => {
	try {
		//gettting the token
		const token = req.headers.authorization?.split(' ')[1];
		if (!token)
			next(new Error('You are not loged in, please do so to get access!'));

		//check if token is tempered with or is expired, will auto generate error for invalid signature
		const decoded = await jwt.verify(token, process.env.JWT_SECRETE);

		//find user based on token;
		const freshUser = await User.findOne({ _id: decoded.id }).select('+role');

		if (!freshUser)
			next(
				new Error(
					'User not found, this user might have deleted their account very recently'
				)
			);

		// console.log(freshUser.passwordUpdatedAt.getTime() / 1000, decoded.iat);
		if (freshUser.passwordUpdatedAt?.getTime() / 1000 > decoded.iat)
			return next(
				new Error('Password was recently changed, please login again.')
			);

		req.user = freshUser;
	} catch (err) {
		next(err);
	}
	next();
};

exports.restrictTo = (...roles) => {
	return async (req, res, next) => {
		if (!roles.includes(req.user.role))
			return next(new Error('You are not permited to carry out this action'));

		next();
	};
};

exports.logout = async (req, res, next) => {
	res.status(200).json({
		status: 'logged out',
		token: 'You have been logged out of your account',
	});
};
