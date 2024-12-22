import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = ({ onSearch, userData, loading, error }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // Call the fetchUserData function here
      fetchUserData(username) // Fetch data using the username
        .then((data) => onSearch(data)) // Handle the response and pass it to onSearch
        .catch(() => onSearch(null, true)); // In case of error, pass error state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
