import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !ingredients || !steps) {
            setError('All fields are required.');
            return;
        }

        const ingredientsArray = ingredients.split(',').map(ing => ing.trim());
        if (ingredientsArray.length < 2) {
            setError('Please provide at least two ingredients.');
            return;
        }

        setError('');
        console.log('Recipe Submitted:', { title, ingredients: ingredientsArray, steps });
        // Here you can add the logic to save the recipe
        setTitle('');
        setIngredients('');
        setSteps('');
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-medium mb-2">Recipe Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter recipe title"
                    />
                </div>

                <div>
                    <label htmlFor="ingredients" className="block font-medium mb-2">Ingredients (comma-separated)</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="e.g., flour, sugar, eggs"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="steps" className="block font-medium mb-2">Preparation Steps</label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Describe the preparation steps"
                    ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;