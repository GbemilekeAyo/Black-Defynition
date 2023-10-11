import React, { useState } from 'react';
import axios from 'axios';

function ViewResults() {
  const [categoryId, setCategoryId] = useState('');
  const [results, setResults] = useState(null);

  const handleViewResults = async () => {
    try {
      // Send a GET request to view voting results for a contest category
      const response = await axios.get(`https://zany-lime-panther-vest.cyclic.app/categories/${categoryId}/results`);
      if (response.status === 200) {
        setResults(response.data.results);
      }
    } catch (error) {
      console.error('Error fetching results: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">View Category Results</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Category ID"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          onClick={handleViewResults}
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          View Results
        </button>
      </div>
      {results && (
        <div>
          {/* Display contest category results here */}
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ViewResults;

