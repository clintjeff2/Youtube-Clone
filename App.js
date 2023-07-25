const express = require('express');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');

const app = express();

//BodyParser
app.use(express.json());

//LOG request information
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Redirecting routes
app.use('/api/v1/user', userRouter);

//HANDLING NOT FOUND ROUTES
app.all('*', (req, res, next) => {
	res.status(400).json({
		status: 'Failed',
		message: `${req.originalUrl} not found on this server`,
	});
});

app.use((err, req, res, next) => {
	res.status(400).json({
		status: 'failed',
		error: err,
		stack: err.stack,
	});
});
module.exports = app;
