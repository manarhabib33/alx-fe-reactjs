import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
