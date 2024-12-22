import axios from 'axios';

export const fetchUserData = async (username = '', location = '', minRepos = '', page = 1) => {
  try {
    // Constructing the query string based on the parameters
    let query = `${username ? `user:${username}` : ''}`;
    
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );
    
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
