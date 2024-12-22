import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch, userData, loading, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [page, setPage] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() || location.trim() || minRepos.trim()) {
      fetchUserData(username, location, minRepos, page)
        .then((data) => onSearch(data))
        .catch(() => onSearch(null, true)); // Handle error state
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    fetchUserData(username, location, minRepos, page + 1)
      .then((data) => onSearch(data, false))
      .catch(() => onSearch(null, true)); // Handle error state
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input */}
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="p-2 w-full border border-gray-300 rounded"
          />
        </div>

        {/* Location Input */}
        <div>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Location"
            className="p-2 w-full border border-gray-300 rounded"
          />
        </div>

        {/* Min Repositories Input */}
        <div>
          <input
            type="number"
            name="minRepos"
            value={minRepos}
            onChange={handleInputChange}
            placeholder="Min Repositories"
            className="p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
          Search
        </button>
      </form>

      {/* Loading and Error Handling */}
      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {/* Display User Data */}
      {userData && (
        <div className="space-y-4">
          {userData.items?.map((user) => (
            <div key={user.id} className="border border-gray-200 p-4 rounded">
              <img src={user.avatar_url} alt={user.login} width="100" className="rounded" />
              <h2>{user.login}</h2>
              <p>Location: {user.location || 'Not provided'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Visit Profile
              </a>
            </div>
          ))}
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
