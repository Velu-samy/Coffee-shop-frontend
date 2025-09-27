import React, { useState } from 'react';
import img from '../assets/contact.jpg';
import Navbar from './Navabr';
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

      const res = await axios.post('http://127.0.0.1:8000/api/contact', form, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

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
    <div>
      <Navbar />
      <div className="contact-content flex justify-center mt-5 items-center gap-5 p-20">
        <div className="left w-1/2 shadow-lg p-10 flex justify-center flex-col">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            initial={{ x: -30, opacity: 0 }}
          >
            <h1 className='text-5xl font-serif mb-3'>Contact</h1>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            initial={{ y: 0, opacity: 0 }}
          >
            <p>
              We'd love to hear from you! Whether you have questions about our brews, feedback on your experience, or just want to say hello, drop us a message below.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            initial={{ x: 0, opacity: 0 }}
          >
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
              <div className='mt-5 flex gap-5 gap-y-5 justify-center items-center flex-wrap'>
                <div className="grp gap-10 flex">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className='px-5 py-2 border border-black'
                    placeholder='Name'
                    required
                  />
                  <input
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className='px-5 py-2 border border-black'
                    placeholder='Message'
                    required
                  />
                </div>
                <div className="grp flex gap-10 mt-5 mb-4">
                  <input
                    type="text"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    className='px-5 py-2 border border-black'
                    placeholder='Number'
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className='px-5 py-2 border border-black drop-shadow-lg shadow-md'
                    placeholder='Gmail'
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                className='px-10 py-2 bg-black rounded-md mt-5 w-32 text-white hover:bg-transparent hover:text-black hover:border-black border'
              >
                Submit
              </button>

              {success && (
                <div className="text-green-500 text-center font-semibold mt-4">
                  {success}
                </div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          initial={{ x: 100, opacity: 0 }}
          className="right w-1/2 flex justify-center mb-5"
        >
          <img src={img} alt="Contact" className='w-4/5' />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;