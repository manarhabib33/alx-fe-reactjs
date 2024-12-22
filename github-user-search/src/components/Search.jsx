import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError(true);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded mb-4 w-full max-w-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user</p>}
        {userData && (
          <div className="flex flex-col items-center">
            <img
              src={userData.avatar_url}
              alt={userData.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{userData.name}</h2>
            <p className="text-sm text-gray-600">@{userData.login}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
