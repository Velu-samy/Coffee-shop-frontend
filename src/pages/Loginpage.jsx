import React, { useState } from 'react';
import axios from 'axios';
import img from '../assets/login.jpg';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://coffee-shop-backend-2-vud1.onrender.com/api/login', {
        email,
        password,
      });

      const { success, token, user, message } = response.data;

      if (success && token && user?.name) {
        setSuccess('Login successful!');
        window.location.href = '/';
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', user.name);
       
      } else {
        setError(message || 'Invalid email or password');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Server error or invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="shadow-soft-black flex flex-col md:flex-row w-full max-w-7xl rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-full">
          <img src={img} alt="Login Visual" className="object-cover w-full h-full" />
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <div className="text-center">
              <a href="/register" className="hover:underline text-sm">Don't have an account?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;