import axios from 'axios';

export const fetchUserData = async (username = '', location = '', minRepos = '', page = 1) => {
  try {
    let query = `${username ? `user:${username}` : ''}`;

    // Include location and minimum repositories if provided
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    // Construct the GitHub API request with dynamic query
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );

    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
