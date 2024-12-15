import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <p>Recipe ID: {id}</p>
    </div>
  );
};

export default RecipeDetail;
