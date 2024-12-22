import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Returns the user data if the request is successful
  } catch (error) {
    throw new Error('User not found');  // Throws an error if the user is not found
  }
};
