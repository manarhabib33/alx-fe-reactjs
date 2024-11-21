import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, isError, isLoading, isFetching, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 300000, // 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>An error occurred while fetching posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <p>Updating data...</p>}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
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
