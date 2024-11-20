import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          {/* Route for the Recipe List */}
          <Route path="/" element={<RecipeList />} />
          {/* Route for Recipe Details */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          {/* Route for Add Recipe Form */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
