import { useRecipeStore } from './components/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
