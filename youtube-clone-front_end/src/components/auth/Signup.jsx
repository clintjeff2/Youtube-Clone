import React from 'react';
import styles from './signup.module.css';

function Signup() {
	return (
		<div className={styles.signup}>
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
					{/**Make sure to validate these links in the backend */}
				</div>
				<div>
					<label htmlFor="cpassword">* Confirm Password: </label>
					<input
						type="password"
						name="cpassword"
						placeholder="Confirm password"
					/>
				</div>
				<div>
					<label htmlFor="firstname">First Name: </label>
					<input type="text" name="firstname" placeholder="First Name" />
				</div>
				<div>
					<label htmlFor="lastname">Last Name: </label>
					<input type="text" name="lastname" placeholder="Last Name" />
				</div>
				<div>
					<label htmlFor="photo">Profile url: </label>
					<input
						type="text"
						name="photo"
						placeholder="Enter a valide link address to a profile picture"
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
