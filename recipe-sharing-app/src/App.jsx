import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetail from './components/RecipeDetail'; // Importing RecipeDetail Component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>

        {/* Adding Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Added RecipeDetail Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
