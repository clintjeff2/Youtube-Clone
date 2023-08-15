import React from 'react';
import styles from './library-section.module.css';
import VideoCard from '../VideoCard';
function LibrarySection() {
	return (
		<div className={styles.library}>
			<VideoCard />
		</div>
	);
}

export default LibrarySection;
