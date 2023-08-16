import React from 'react';
import styles from './create-channel.module.css';
import { useNavigate } from 'react-router-dom';

function CreateChannel() {
	const navigate = useNavigate();
	const handleCreateChannel = (e) => {
		e.preventDefault();

		navigate('/channel');
	};
	return (
		<div className={styles.channel}>
			<h2>Create Your Channel</h2>
			<form action="" onSubmit={handleCreateChannel}>
				<div>
					<label htmlFor="cName">Channel Name: </label>
					<input
						type="text"
						name="cName"
						placeholder="Enter a name for you channel"
					/>
				</div>
				<div>
					<label htmlFor="coverPhoto">Background: </label>
					<input
						type="text"
						name="coverPhoto"
						placeholder="Enter a valid link to a background profile"
					/>
					{/**Make sure to validate these links in the backend */}
				</div>
				<div>
					<label htmlFor="logo">Channel Logo: </label>
					<input
						type="text"
						name="logo"
						placeholder="Enter a valid link to a to a channel logo"
					/>
				</div>
				<div>
					<label htmlFor="country">Channel Name: </label>
					<input type="text" name="country" placeholder="Country" />
				</div>
				<div>
					<button type="submit" className="create">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateChannel;
