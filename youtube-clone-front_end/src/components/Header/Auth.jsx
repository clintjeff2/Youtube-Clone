import React from 'react';
import styles from './auth.module.css';
import { Link } from 'react-router-dom';
function Register() {
	return (
		<div className={styles.auth}>
			<Link to="/signin">
				<button className={styles.signin}>Login</button>
			</Link>
			<Link to="/signup">
				<button className={styles.signup}>Register</button>
			</Link>
			<Link to="">
				<button className={styles.signout}>Logout</button>
			</Link>
		</div>
	);
}

export default Register;
