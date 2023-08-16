import React from 'react';
import ChannelHeader from '../ChannelHeader';
import styles from './channel.module.css';

function Channel() {
	return (
		<div className={styles.channel}>
			<ChannelHeader />
		</div>
	);
}

export default Channel;
