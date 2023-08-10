import React from 'react';
import LeftNav from '../components/LeftNav';
import styles from './watch-video.module.css';
import './../utils/additionalStyle.css';
import Header from '../components/Header';
import { BsList } from 'react-icons/bs';
import Watching from '../components/Watching';
import AvailVideoList from '../components/AvailVideoList';

const size = {
	height: '130',
	width: '230',
	textSize: 'smallText',
	margin: 'margin',
};
function WatchVideo() {
	return (
		<div className={styles.watch}>
			<Header>
				<BsList className={styles.responsive} />
			</Header>
			{/* <LeftNav fullHeight="fullHeight" />  **Shows only in responsive mode */}
			{/* reason in utils/additionalStyles */}
			<div className={styles.body}>
				<Watching />
				<div className={styles.recommended}>
					<AvailVideoList size={size} />
				</div>
			</div>
		</div>
	);
}

export default WatchVideo;
