import React, { useState } from 'react';

const Search = ({ onSearch, userData, loading, error }) => {
  const [username, setUsername] = useState(''); // Store the search input

  const handleInputChange = (e) => {
    setUsername(e.target.value); // Update state with the search input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username); // Trigger the API call passed from parent
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

      {loading && <p>Loading...</p>} {/* Display loading message */}
      
      {error && <p>{error}</p>} {/* Display error message */}

      {userData && (
        <div>
          {/* Display User Data */}
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
