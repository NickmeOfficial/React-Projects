import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e) => {
		setUsername(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (username.trim() !== "") {
			fetchUserData(username);
		}
	};

	const fetchUserData = async (username) => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.github.com/users/${username}`
			);
			const data = await response.json();
			setUserData(data);
		} catch (error) {
			console.error("Error fetching user data:", error);
			setUserData(null);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// Fetch initial user data
		fetchUserData("NickmeOfficial");
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Github User Info</h1>
				<form onSubmit={handleFormSubmit}>
					<label>
						Enter GitHub Username:
						<input
							type='text'
							value={username}
							onChange={handleInputChange}
						/>
					</label>
					<button type='submit'>Submit</button>
				</form>
			</header>
			{loading ? (
				<div className='loading-spinner'>Loading...</div>
			) : (
				userData && <UserInfo userData={userData} />
			)}
		</div>
	);
}

function UserInfo({ userData }) {
	return (
		<div className='user-info'>
			<div className='image-container'>
				<img
					src={userData.avatar_url}
					alt={userData.login}
				/>
			</div>
			<h2>{userData.name}</h2>
			<p>{userData.bio}</p>
			<ul>
				<li>Followers: {userData.followers}</li>
				<li>Following: {userData.following}</li>
				<li>Public Repos: {userData.public_repos}</li>
				<li>
					Member Since:{" "}
					{new Date(userData.created_at).toLocaleDateString()}
				</li>
			</ul>
			<a
				href={userData.html_url}
				target='_blank'
				rel='noopener noreferrer'>
				View Profile
			</a>
		</div>
	);
}

export default App;
