import React from 'react';
import styles from './left-nav.module.css';
import * as AntDesIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import SubscriptionList from './Left Navigation/SubscriptionList';
import { RxCross2 } from 'react-icons/rx';
import { PiTelevisionSimple, PiTelevisionSimpleFill } from 'react-icons/pi';
import './left-nav.css';
function LeftNav(props) {
	const urlInfo = useLocation();
	return (
		<div className={`${styles.navContainer} ${props?.fullHeight}`}>
			{props.fullHeight && (
				<span className={styles.crossBar} onClick={props.onHandleNav}>
					<RxCross2 />
				</span>
			)}
			<li className={styles.home}>
				<NavLink to="/" className={styles.link}>
					<span className={styles.logo}>
						{urlInfo.pathname === '/' ? (
							<AntDesIcons.AiFillHome />
						) : (
							<AntDesIcons.AiOutlineHome />
						)}
					</span>
					<span>Home</span>
				</NavLink>
			</li>
			<SubscriptionList />
			<li className={styles.library}>
				<NavLink to="/channel" className={styles.link}>
					<span className={styles.logo}>
						{urlInfo.pathname === '/channel' ? (
							<PiTelevisionSimpleFill />
						) : (
							<PiTelevisionSimple />
						)}
					</span>
					<span>Channel</span>
				</NavLink>
			</li>
			<li className={styles.library}>
				<NavLink to="/library" className={styles.link}>
					<span className={styles.logo}>
						{urlInfo.pathname === '/library' ? (
							<MdIcons.MdVideoLibrary />
						) : (
							<MdIcons.MdOutlineVideoLibrary />
						)}
					</span>
					<span>Library</span>
				</NavLink>
			</li>
			<li className={styles.settings}>
				<NavLink to="/settings" className={styles.link}>
					<span className={styles.logo}>
						{urlInfo.pathname.startsWith('/settings') ? (
							<IoIcons.IoSettingsSharp />
						) : (
							<IoIcons.IoSettingsOutline />
						)}
					</span>
					<span>Settings</span>
				</NavLink>
			</li>
			<li className={styles.copyright}>
				Copyright&copy; 2023 by Jefferson Youashi
			</li>
		</div>
	);
}

export default LeftNav;
