import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from '../recipeStore'; // Adjust the import path to match your file structure



const RecipeList = () => {
  const { recipes, addFavorite, removeFavorite, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    favorites: state.favorites,
  }));

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
