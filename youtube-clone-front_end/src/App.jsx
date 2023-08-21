import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LibrarySection from './components/Library/LibrarySection';
import SubscriptionSection from './components/Subscription/SubscriptionSection';
import Home from './components/Home/Home';
import WatchVideo from './pages/WatchVideo';
import Settings from './components/settings/Settings';
import Channel from './components/channel/Channel';
import CreateChannel from './components/settings/CreateChannel';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
// import AvailVideoList from './components/AvailVideoList';
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />}>
						<Route path="" index element={<Home />} />
						<Route path="signup" element={<Signup />} />
						<Route path="signin" element={<Signin />} />
						<Route path="library" element={<LibrarySection />} />
						<Route path="subscription/:id" element={<SubscriptionSection />} />
						<Route path="channel" element={<Channel />} />
						<Route path="settings" element={<Settings />}>
							<Route path="create-channel" element={<CreateChannel />} />
						</Route>
					</Route>
					<Route path="/watch" element={<WatchVideo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
