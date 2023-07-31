import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import styles from './notification.module.css';

function Notification() {
	return (
		<div className={styles.notification}>
			<IoMdNotificationsOutline />
		</div>
	);
}

export default Notification;
