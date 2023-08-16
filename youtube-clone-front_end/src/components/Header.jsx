import React from 'react';
import styles from './header.module.css';
import Logo from './Header/Logo';
import SearchBar from './Header/SearchBar';
import Notification from './Header/Notification';
import Profile from './Header/Profile';
import Register from './Header/Register';

function Header(props) {
	return (
		<div className={styles.header}>
			<nav className={styles.mainNav}>
				{props?.children}
				<Logo />
				<SearchBar className={styles.searchBar} />
				<Notification />
				<Profile />
				<Register />
			</nav>
		</div>
	);
}
export default Header;
