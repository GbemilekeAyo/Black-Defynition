import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContestList() {
  const [contestCategories, setContestCategories] = useState([]);

  useEffect(() => {
    const fetchContestCategories = async () => {
      try {
        const response = await axios.get('https://zany-lime-panther-vest.cyclic.app/categories');
        if (response.status === 200) {
          setContestCategories(response.data.categories);
        }
      } catch (error) {
        console.error('Error fetching contest categories: ', error);
      }
    };

    fetchContestCategories();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contest Categories</h2>
      <ul>
        {contestCategories.map((category) => (
          <li key={category._id}>
            <a href={`/categories/${category._id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContestList;

