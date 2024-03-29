import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/user/get/formData.email', formData);
      console.log(response.data);
      setErrorMessage('');
      // Handle successful login here, e.g., redirect user to dashboard
    } catch (error) {
      console.error(error);
      if (error.response) {
        setErrorMessage(`Server error: ${error.response.status}`);
      } else if (error.request) {
        setErrorMessage("Network error. Please try again later.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    // <div className="flex items-center justify-center h-screen">
    <div className="max-w-md px-10 pt-12 mx-auto bg-gradient-to-r from-purple-600 to-purple-900 py-7 rounded-xl">
      <h2 className="mb-4 text-2xl font-bold">Sign In</h2>
      {errorMessage && <p className="mb-4 text-red-600">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="px-1 text-xl text-black border border-black rounded-md hover:text-gray-300 focus:outline-none bg-gradient-to-r from-sky-500 to-indigo-500'">Sign In</button>
      </form>
    </div>
    // </div>
  );
};

export default SignIn;
