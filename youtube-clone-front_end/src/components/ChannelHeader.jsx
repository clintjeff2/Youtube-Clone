import React from 'react';
import styles from './channel-header.module.css';
function ChannelHeader() {
	return (
		<header>
			<div className={styles.channelCover}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbxdEaRcvtkzbKkFGNKJiS8WXQ4kLVzKZUA&usqp=CAU"
					alt=""
				/>
			</div>
			<div className={styles.channelInfo}>
				<img
					src="https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div className={styles.content}>
					<h2>FreeCode Camp</h2>
					<span>
						@freecodecamp
						<span>8.2 M subscribers</span>
						<span>200 videos</span>
					</span>
					<a href="https://website.com" rel="noreferrer" target="_blank">
						Link to website
					</a>
				</div>
			</div>
		</header>
	);
}

export default ChannelHeader;
