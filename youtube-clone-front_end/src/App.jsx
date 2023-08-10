import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LibrarySection from './components/Library/LibrarySection';
import SubscriptionSection from './components/Subscription/SubscriptionSection';
import Home from './components/Home/Home';
import WatchVideo from './pages/WatchVideo';
// import AvailVideoList from './components/AvailVideoList';
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />}>
						<Route path="" index element={<Home />} />
						{/* <Route path="/:id" element={<AvailVideoList />} /> */}
						<Route path="library" element={<LibrarySection />} />
						<Route path="settings" element={<SubscriptionSection />} />
					</Route>
					<Route path='/watch' element={<WatchVideo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
