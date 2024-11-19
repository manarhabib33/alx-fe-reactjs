import { useRecipeStore } from './RecipeStore';

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    updateRecipe(recipe.id, updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" defaultValue={recipe.title} />
      <textarea name="description" defaultValue={recipe.description} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
