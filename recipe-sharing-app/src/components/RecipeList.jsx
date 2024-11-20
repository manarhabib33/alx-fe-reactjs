import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; 

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <h2>Recipes List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
