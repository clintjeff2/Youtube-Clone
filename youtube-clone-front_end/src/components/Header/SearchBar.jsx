import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './search-bar.module.css';
function SearchBar() {
	return (
		<form action="" className={styles.searchBar}>
			<input type="text" placeholder="Search" />
			<button>
				<BsSearch />
			</button>
		</form>
	);
}

export default SearchBar;
