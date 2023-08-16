import React from 'react';
import styles from './settings-home.module.css';
import { Link } from 'react-router-dom';

function SettingsHome() {
	return (
		<div className={styles.settingsHome}>
			<section className={styles.account}>
				<h4>Account</h4>
				<h2>Choose how you appear and what you see on Tube</h2>
				<span className={styles.whoami}>Signed in as test@example.com</span>
			</section>
			<section className={styles.channel}>
				<h3>Your Tube Channel</h3>
				<span className={styles.text}>
					You need a Tube channel to upload videos
				</span>
				<div className={styles.channelInfo}>
					<h4>Your channel</h4>
					<Link to="/settings/create-channel">
						<h4>Create a channel</h4>
					</Link>
					<Link to="/channel">
						<h4>Channel Name</h4>
					</Link>
				</div>
			</section>
			<section className={styles.accountDetails}>
				<h4>Your account</h4>
				<Link to="?aId=lkjiohoi234">
					<h4>View or change your account settings</h4>
				</Link>
			</section>
			<section className={styles.log}>
				<Link to="#">
					<button className="logout">Logout</button>
				</Link>
			</section>
		</div>
	);
}

export default SettingsHome;
