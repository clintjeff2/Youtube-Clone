import React from 'react';
import profile from './../../assets/profile-pic.png';
import styles from './profile.module.css';
function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src={profile} alt="" className={styles.profile} />
			<span>UserName</span>
		</div>
	);
}

export default Profile;
