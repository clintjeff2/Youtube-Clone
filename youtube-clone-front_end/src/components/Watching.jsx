import React from 'react';
import styles from './watching.module.css';
import YouTube from 'react-youtube';
import { style, opts } from '../utils/TubeProps';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const myOpts = {
	height: '700',
	width: '1225',
	playerVars: {
		autoplay: 0,
	},
};

function Watching() {
	return (
		<div className={styles.watching}>
			<YouTube videoId="gRovQdZ6IHw" styles={style} opts={myOpts} />
			<div className={styles.currentInfo}>
				<h3>
					How Sergio Busquets Tricked EVERYONE Into Thinking He Doesn't Do
					Anything
				</h3>
				<div className={styles.videoInfo}>
					<div className={styles.channel}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<div className={styles.channelInfo}>
							<span>All Night Long</span>
							<span className={styles.numSubs}>130K subscribers</span>
						</div>
					</div>
					<button className={`dark ${styles.subs}`}>Subscribe</button>
					<button className="light">
						12K
						<span> &nbsp; </span>
						<AiOutlineLike />
					</button>
					<button className="light">
						<AiOutlineDislike />
					</button>
				</div>
				<p className={styles.description}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
					aspernatur delectus deleniti officia pariatur officiis quaerat,
					possimus vero eveniet velit quidem natus quia amet minima fuga labore
					et animi ullam cum perferendis eos culpa cumque voluptates. Cupiditate
					animi in a cumque modi culpa adipisci. Consequuntur iusto dicta
					repellendus tempora ullam quam debitis necessitatibus, molestias
					perferendis assumenda nobis, cum odit reprehenderit?
				</p>
			</div>
		</div>
	);
}

export default Watching;
