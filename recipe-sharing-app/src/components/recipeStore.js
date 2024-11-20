import create from 'zustand';

// Zustand store for recipes
const useRecipeStore = create(set => ({
  // Initial state
  recipes: [],
  searchTerm: '',
  favorites: [],
  filteredRecipes: [],
  recommendations: [],

  // Actions
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  setSearchTerm: (term) => set(state => {
    state.searchTerm = term;
    state.filterRecipes();
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Adding the required "addRecipe" action
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
  })),
}));

export default useRecipeStore;
