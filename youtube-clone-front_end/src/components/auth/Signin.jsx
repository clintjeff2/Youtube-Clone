import React from 'react';
import styles from './signin.module.css';

function Signup() {
	return (
		<div className={styles.signin}>
			<form action="">
				<div>
					<label htmlFor="email">* Email: </label>
					<input
						type="text"
						name="email"
						placeholder="Enter your email address"
					/>
				</div>
				<div>
					<label htmlFor="password">* Password: </label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
					/>
				</div>
				<div>
					<button type="submit" className="create">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;
