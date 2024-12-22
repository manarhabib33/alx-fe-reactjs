import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [userData, setUserData] = useState(null); // Store user data
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Track error state

  const handleSearch = async (username) => {
    setLoading(true);
    setError(''); // Reset any previous error
    try {
      const data = await fetchUserData(username); // API call to fetch user data
      setUserData(data); // Update state with user data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Error message if user not found
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
        error={error} // Pass the error state to the Search component
      />
    </div>
  );
};

export default App;
