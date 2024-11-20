import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
