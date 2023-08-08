import React from 'react';
import VideoCard from '../VideoCard';
import './home.css';
import { useSearchParams } from 'react-router-dom';
import AvailVideoList from '../AvailVideoList';

function Home() {
	const [searchParams] = useSearchParams();
	const isSearched = searchParams.get('search');
	return (
		<div className="home">
			<div className="videos">
				{!isSearched && <VideoCard />}
				{isSearched && <AvailVideoList />}
			</div>
		</div>
	);
}

export default Home;
