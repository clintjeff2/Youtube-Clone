import React from 'react';
import styles from './header.module.css';
import { BsList } from 'react-icons/bs';
import Logo from './Header/Logo';
import SearchBar from './Header/SearchBar';
import Notification from './Header/Notification';
import Profile from './Header/Profile';

function Header() {
	return (
		<div className={styles.header}>
			<nav className={styles.mainNav}>
				<BsList className={styles.responsive} />
				<Logo />
				<SearchBar className={styles.searchBar} />
				<Notification />
				<Profile />
			</nav>
		</div>
	);
}
export default Header;