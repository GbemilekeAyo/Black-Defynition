import React, { useState } from 'react';

function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Implement admin login logic here, e.g., using Axios to make an API call
      // Replace with your actual API endpoint
      const response = await axios.post('https://zany-lime-panther-vest.cyclic.app/admin/login/admin', formData);

      if (response.status === 200) {
        setSuccessMessage('Login successful!');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
}

export default LoginAdmin;

