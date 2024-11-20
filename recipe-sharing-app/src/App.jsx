import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm'; // Assuming this component exists

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/favorites" component={FavoritesList} />
          <Route path="/recommendations" component={RecommendationsList} />
          <Route path="/add-recipe" component={AddRecipeForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
