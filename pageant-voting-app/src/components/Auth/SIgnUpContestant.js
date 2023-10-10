import React, { useState } from 'react';

function SignUpContestant() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contest: '',
    image: null, // Initialize image as null
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      // Handle image file upload separately
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Create a FormData object to send both form data and image file
      const formDataWithImage = new FormData();
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('age', formData.age);
      formDataWithImage.append('contest', formData.contest);
      formDataWithImage.append('image', formData.image);

      // Implement contestant registration logic here, e.g., using Axios to make an API call
      // Replace with your actual API endpoint
      const response = await axios.post('https://zany-lime-panther-vest.cyclic.app/auth/signup/contestant', formDataWithImage);

      if (response.status === 200) {
        setSuccessMessage('Registration successful! You can now log in.');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contestant Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="contest">Contest</label>
          <input
            type="text"
            id="contest"
            name="contest"
            value={formData.contest}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border"
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
}

export default SignUpContestant;

