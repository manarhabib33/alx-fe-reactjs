import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    // Existing recipes should be here
  ],
  searchTerm: '',
  filteredRecipes: [],

  // Update the search term
  setSearchTerm: (term) => set((state) => {
    const searchTerm = term.toLowerCase();
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm)
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));
