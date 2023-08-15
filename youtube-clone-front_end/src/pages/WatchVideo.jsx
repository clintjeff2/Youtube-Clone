import React from 'react';
import LeftNav from '../components/LeftNav';
import styles from './watch-video.module.css';
import './../utils/additionalStyle.css';
import Header from '../components/Header';
import { BsList } from 'react-icons/bs';
import Watching from '../components/Watching';
import AvailVideoList from '../components/AvailVideoList';
import { useState } from 'react';

const size = {
	height: '130',
	width: '230',
	textSize: 'smallText',
	margin: 'margin',
};
function WatchVideo() {
	const [showNav, setShowNav] = useState(false);
	const handleNav = () => {
		setShowNav((prev) => !prev);
		console.log('BRAVO GETTING VER');
	};
	return (
		<div className={styles.watch}>
			<Header onHandleNav={handleNav}>
				<BsList className={styles.responsive} onClick={handleNav} />
			</Header>
			{showNav && <LeftNav fullHeight="fullHeight" onHandleNav={handleNav} />}

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
