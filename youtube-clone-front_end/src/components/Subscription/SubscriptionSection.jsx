import React from 'react';
import styles from './subscription-section.module.css';
import VideoCard from '../VideoCard';
import ChannelHeader from '../ChannelHeader';
function SubscriptionSection() {
	return (
		<div className={styles.channel}>
			<ChannelHeader />
			<VideoCard />
		</div>
	);
}

export default SubscriptionSection;
