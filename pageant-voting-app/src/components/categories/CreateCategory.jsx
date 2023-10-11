import React, { useState } from 'react';
import axios from 'axios';

function CreateCategory() {
  const [categoryName, setCategoryName] = useState('');

  const handleCreateCategory = async () => {
    try {
      // Send a POST request to create a new contest category
      await axios.post('https://zany-lime-panther-vest.cyclic.app/categories', { name: categoryName });
      alert('Category created successfully!');
      // Clear the input field after successful creation
      setCategoryName('');
    } catch (error) {
      console.error('Error creating category: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create New Category</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          onClick={handleCreateCategory}
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateCategory;

