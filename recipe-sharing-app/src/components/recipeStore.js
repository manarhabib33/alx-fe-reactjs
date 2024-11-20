import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    // Existing recipes should be here
  ],
  searchTerm: '',
  filteredRecipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Update the search term
  setSearchTerm: (term) => set((state) => {
    const searchTerm = term.toLowerCase();
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm)
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));


const useRecipeStore = create(set => ({
  ...existingStoreLogic, // Retain existing logic

  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
