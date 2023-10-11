import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [adminInfo, setAdminInfo] = useState(null);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    prize: '',
  });
  const [categoryId, setCategoryId] = useState(''); // Define categoryId and set its initial value

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get('https://zany-lime-panther-vest.cyclic.appadmin/info');
        if (response.status === 200) {
          setAdminInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching admin information: ', error);
      }
    };

    // Call the fetchAdminInfo function after the component mounts
    fetchAdminInfo();
  }, []);

  const handleCreateCategory = async () => {
    try {
      // Send a POST request to create a contest category
      await axios.post('https://zany-lime-panther-vest.cyclic.app/categories', newCategory);
      alert('Contest category created successfully!');
      // Clear the form fields after successful creation
      setNewCategory({
        name: '',
        description: '',
        startTime: '',
        endTime: '',
        prize: '',
      });
    } catch (error) {
      console.error('Error creating contest category: ', error);
    }
  };

  const handleEndCategory = async () => {
    try {
      // Send a POST request to end a contest category
      await axios.post(`https://zany-lime-panther-vest.cyclic.app/categories/${categoryId}/end`);
      alert('Contest category ended successfully!');
      
    } catch (error) {
      console.error('Error ending contest category: ', error);
    }
  };

  const handleViewResults = async () => {
    try {
      // Send a GET request to view voting results for a category
      const response = await axios.get(`https://zany-lime-panther-vest.cyclic.app/categories/${categoryId}/results`);
      
      console.log('Voting results:', response.data);
      
    } catch (error) {
      console.error('Error viewing results: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      {adminInfo ? (
        <div>
          <p>Welcome, {adminInfo.username}</p>
        </div>
      ) : (
        <p>Loading admin information...</p>
      )}
      <div>
        <h3>Create Contest Category</h3>
        <form onSubmit={handleCreateCategory}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="startTime">Start Time</label>
            <input
              type="text"
              id="startTime"
              name="startTime"
              value={newCategory.startTime}
              onChange={(e) =>
                setNewCategory({ ...newCategory, startTime: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="endTime">End Time</label>
            <input
              type="text"
              id="endTime"
              name="endTime"
              value={newCategory.endTime}
              onChange={(e) =>
                setNewCategory({ ...newCategory, endTime: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="prize">Prize</label>
            <input
              type="text"
              id="prize"
              name="prize"
              value={newCategory.prize}
              onChange={(e) =>
                setNewCategory({ ...newCategory, prize: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit" // Change the button type to "submit" to submit the form
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
          >
            Create Category
          </button>
        </form>
      </div>
      <div>
        <h3>Manage Voting</h3>
        {/* Add logic and buttons to end contests */}
        <button
          onClick={handleEndCategory} // Remove categoryId as it is not needed here
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover-bg-primary-600"
        >
          End Contest
        </button>
      </div>
      <div>
        <h3>View Results</h3>
        <div>
          <label htmlFor="categoryId">Category ID</label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </div>
        {/* Add logic and buttons to view results */}
        <button
          onClick={handleViewResults}
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover-bg-primary-600"
        >
          View Results
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;

