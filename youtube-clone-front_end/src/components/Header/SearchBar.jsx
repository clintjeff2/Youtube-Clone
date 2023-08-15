import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './search-bar.module.css';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
	const navigate = useNavigate();
	const [searchString, setSearchString] = useState('');
	function handleVideoSearch(e) {
		e.preventDefault();
		navigate(`/?search=${searchString}`);
	}
	return (
		<form action="" className={styles.searchBar} onSubmit={handleVideoSearch}>
			<input
				type="text"
				placeholder="Search"
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<button>
				<BsSearch />
			</button>
		</form>
	);
}

export default SearchBar;

//CURRENTLY, SEARCH ONLY WORKS WHEN ON THE INDEX PAGE
//NEEDS TO BE ARRANGED
