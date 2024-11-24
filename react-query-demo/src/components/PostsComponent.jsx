import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Fetching posts from the API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const {
    data,
    isError,
    error, // Added this to destructure the error object
    isLoading,
    isFetching,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 300000, // Data remains fresh for 5 minutes
    cacheTime: 600000, // Cached data kept for 10 minutes
    refetchOnWindowFocus: true, // Refetch when the window regains focus
    keepPreviousData: true, // Show old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message || "Something went wrong while fetching posts."}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <p>Fetching updated data...</p>}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
