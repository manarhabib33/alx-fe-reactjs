// src/services/githubService.js

import axios from 'axios';

// Use async/await for the fetchUserData function
export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = `user:${username}${location ? ` location:${location}` : ''}${minRepos ? ` repos:${minRepos}..` : ''}`;
    
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    return response.data; // Returning the data directly
  } catch (error) {
    console.error(error);
    return null;
  }
};
