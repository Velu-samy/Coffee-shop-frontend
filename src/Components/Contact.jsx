import React, { useState } from 'react';
import img from '../assets/contact.jpg';
import Navbar from '../Components/Navabr';
import Footer from './Footer';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
    number: '',
    email: ''
  });

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken');

      const res = await axios.post(
        'https://coffee-shop-backend-2-vud1.onrender.com/api/contact',
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );

      setSuccess(res.data.message || 'Message sent successfully!');
      setForm({ name: '', message: '', number: '', email: '' });
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response?.status === 422) {
        setSuccess('Please fill all fields correctly.');
      } else if (err.response?.status === 401) {
        setSuccess('Unauthorized. Please log in.');
      } else {
        setSuccess('Something went wrong. Try again.');
      }
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left - Form Section */}
          <div className="w-full lg:w-1/2 shadow-lg p-6 rounded-lg">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h1 className="text-4xl font-serif mb-4">Contact</h1>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <p className="mb-6">
                We'd love to hear from you! Whether you have questions about our brews, feedback on your experience, or just want to say hello, drop us a message below.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-400 rounded"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-400 rounded"
                    placeholder="Message"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-400 rounded"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-400 rounded"
                    placeholder="Email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded hover:bg-transparent hover:text-black border border-black transition"
                >
                  Submit
                </button>
                {success && (
                  <div className="text-green-600 font-semibold mt-2 text-center">
                    {success}
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Right - Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img src={img} alt="Contact" className="rounded-lg shadow-md w-full max-w-md" />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;