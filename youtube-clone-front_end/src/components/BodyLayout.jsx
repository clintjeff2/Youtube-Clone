import React from 'react';
import styles from './body-layout.module.css';
import LeftNav from './LeftNav';
import { Outlet } from 'react-router-dom';

function BodyLayout() {
	return (
		<div className={styles.bodyContainer}>
			<LeftNav />
			<div className={styles.bodyContent}>
				<Outlet />
			</div>
		</div>
	);
}

export default BodyLayout;
