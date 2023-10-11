import React, { useState } from 'react';
import axios from 'axios';

function EndCategory() {
  const [categoryId, setCategoryId] = useState('');

  const handleEndCategory = async () => {
    try {
      // Send a POST request to end voting for a contest category
      await axios.post(`https://zany-lime-panther-vest.cyclic.app/categories/${categoryId}/end`);
      alert('Voting for this category has ended!');
      // Clear the input field after successful end
      setCategoryId('');
    } catch (error) {
      console.error('Error ending category: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">End Category Voting</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          onClick={handleEndCategory}
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          End Voting
        </button>
      </div>
    </div>
  );
}

export default EndCategory;

