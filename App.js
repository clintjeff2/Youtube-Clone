const express = require('express');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');
const videoRouter = require('./routes/videoRoutes');
const channelRouter = require('./routes/channelRoutes');
const userVideoRouter = require('./routes/userVideoRoutes');
const commentRouter = require('./routes/commentRoutes');

const app = express();

//BodyParser
app.use(express.json());

//LOG request information
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Redirecting routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/video', userVideoRouter);
app.use('/api/v1/user/channel/:channelId/video', videoRouter);
app.use('/api/v1/user/:userId/channel', channelRouter);
app.use('/api/v1/comment', commentRouter);

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
