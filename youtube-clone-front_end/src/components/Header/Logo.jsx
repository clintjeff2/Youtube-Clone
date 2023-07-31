import React from 'react';
import styles from './logo.module.css';
import logo from './../../assets/Youtube-Logo.svg';
// https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.svg
function Logo() {
	return <img src={logo} alt="" className={styles.back} />;
}

export default Logo;
