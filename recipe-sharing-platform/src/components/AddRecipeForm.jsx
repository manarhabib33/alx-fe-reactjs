import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({}); // State for form validation errors

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully!", formData);

      // Reset form fields
      setFormData({
        title: "",
        ingredients: "",
        steps: "",
      });

      // Clear errors
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (comma-separated)
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full border rounded ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter ingredients, separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            id="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full border rounded ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter the preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
