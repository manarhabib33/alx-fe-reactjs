import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the mock data
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
