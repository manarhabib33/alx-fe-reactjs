// App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [userData, setUserData] = useState(null); // stores the fetched user data
  const [loading, setLoading] = useState(false); // tracks loading state
  const [error, setError] = useState(null); // stores error messages

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null); // Reset error state before making the new API call
    try {
      const data = await fetchUserData(username);
      setUserData(data); // Update state with fetched data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set the error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search 
        onSearch={handleSearch} 
        userData={userData} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
};

export default App;
