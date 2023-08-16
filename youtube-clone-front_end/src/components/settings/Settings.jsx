import React from 'react';
import styles from './settings.module.css';
import SettingsHome from './SettingsHome';
import { useLocation, Outlet } from 'react-router-dom';

function Settings() {
	const urlInfo = useLocation();
	return (
		<div className={styles.settings}>
			{urlInfo.pathname === '/settings' && <SettingsHome />}
			<Outlet />
			{/* <CreateChannel /> */}
		</div>
	);
}

export default Settings;
