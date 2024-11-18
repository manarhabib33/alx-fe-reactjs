import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState(recipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, formData);
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label>
        Description:
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
