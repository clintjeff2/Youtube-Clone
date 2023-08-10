import React from 'react';
import styles from './avail-video-list.module.css';
import YouTube from 'react-youtube';
import { opts, style } from './../utils/TubeProps';

function AvailVideoList(props) {
	if (props.size) {
		opts.height = `${props.size.height}`;
		opts.width = `${props.size.width}`;
	}
	return (
		<div className={`${styles.availList} ${props?.size?.margin}`}>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические ((шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические ((шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические ((шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
			<div className={styles.video}>
				<YouTube opts={opts} style={style} videoId="0bv-MZ_FQdI" />
				<div className={`${styles.videoInfo} ${props?.size?.textSize}`}>
					<p className={styles.title}>
						🧡💛Произошли небольшие технические (шоколадки) (by nodic269 PvP
						FunTime Spacetime)💙💚
					</p>
					<p>
						<span>100k view </span>|<span> 8 days ago</span>
					</p>
					<div className={styles.channelPhoto}>
						<img
							src="https://yt3.googleusercontent.com/BlOoB7E3OX94E3WNMdbSuUjpdbREVxZWDTaPOaAC8tz_MfTsH4X_WK56ye5TsDOtHbSCwKvhZcM=s176-c-k-c0x00ffffff-no-rj"
							alt=""
						/>
						<span>All Night Long</span>
					</div>
					<p className={styles.videoDesc}>
						ОТКРОЙ ОПИСАНИЕ !!! Айпи - play.funtime.su (играю тут) Прыгаю всем
						на голову на FUNTIME | ПВП С ЧИТАМИ НА ...
					</p>
				</div>
			</div>
		</div>
	);
}

export default AvailVideoList;
