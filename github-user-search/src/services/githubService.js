// services/githubService.js
import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns user data
  } catch (error) {
    throw error; // Throws an error in case of failed API request
  }
};

export { fetchUserData };
