const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./App');
const mongoose = require('mongoose');

//READING

const url = process.env.DATABASE_STRING.replace(
	'<password>',
	process.env.DATABASE_PASSWORD
);

//CONNECTING TO DATABASE
mongoose
	.connect(url)
	.then(() => console.log('Connected to DB'))
	.catch((err) => console.log(err));

//SERVER SETUP
app.listen(process.env.PORT, process.env.LOCALHOST, () => {
	console.log('Server running on port ', process.env.PORT);
});
