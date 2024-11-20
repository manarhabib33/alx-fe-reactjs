import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Store for recipes data
  favorites: [], // Store for favorite recipe IDs
  searchTerm: '', // Store for search input term
  recommendations: [], // Store for recommended recipes

  // Set recipes into the store
  setRecipes: (recipes) => set({ recipes }),

  // Set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on search term
  filteredRecipes: [],

  // Filter recipes based on the search term in the store
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Add a recipe to the favorites list
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from the favorites list
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
