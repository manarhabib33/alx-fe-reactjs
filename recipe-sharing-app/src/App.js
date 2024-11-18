import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { useRecipeStore } from './recipeStore';

const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Recipe List</h1>
              {recipes.map((recipe) => (
                <div key={recipe.id}>
                  <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </div>
              ))}
            </div>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
