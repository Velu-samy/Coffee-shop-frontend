import img from '../assets/logo2.png';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Footer() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username') || 'Guest';
    setName(storedName);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('mail', mail);

      const res = await axios.post('https://coffee-shop-backend-2-vud1.onrender.com/api/news', formData, {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      setSuccess(res.data.message || 'Successfully subscribed!');
      setMail('');
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response?.status === 422) {
        setSuccess('Invalid email format. Try again.');
      } else {
        setSuccess('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="footer-container footer-bg flex flex-col font-custom pt-10">
      {/* Top Section */}
      <div className="row-container flex flex-col lg:flex-row justify-center items-center w-full">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          initial={{ x: -40, opacity: 0 }}
          className="left-container lg:w-1/2 flex justify-center"
        >
          <img src={img} alt="Coffee Shop Logo" className="w-52" />
        </motion.div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          initial={{ x: 0, opacity: 0 }}
          className="right-container lg:w-1/2 mt-10 lg:mt-0 lg:pr-32 items-center flex-col lg:flex-row lg:gap-3 gap-7 flex justify-between px-6"
        >
          <ul>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Payment</a></li>
          </ul>
          <ul>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Favourite</a></li>
            <li><a href="#" className="hover:text-white">Home</a></li>
          </ul>
          <ul className="text-center lg:text-start">
            <li>Block:2, Gandhi Street, Vadapalani,<br />Chennai-600026</li>
            <li><a href="mailto:BrowniiCoffeeshop32@gmail.com">BrowniiCoffeeshop32@gmail.com</a></li>
            <li><a href="tel:+918766552">+91 8766552</a></li>
            <li><a href="tel:+918737735">+91 8737735</a></li>
          </ul>
        </motion.div>
      </div>

      {/* Message Section */}
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        initial={{ x: 0, opacity: 0 }}
        className="rows-container text-center flex justify-center"
      >
        <p className="text-center mt-5 mb-5 text-white w-2/3">
          Thank you for visiting Allwiuns Coffee Shop.
          We hope your day is as warm and rich as our brews.
          Come back soon — there's always a fresh cup waiting for you.
        </p>
      </motion.div>

      {/* Newsletter Section */}
      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        initial={{ y: -20, opacity: 0 }}
        className="flex flex-col lg:flex-row justify-center p-3 items-center gap-5"
      >
        <input
          type="email"
          placeholder="Your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="lg:w-96 w-80 px-4 py-2 outline-none rounded-lg m-2"
          required
        />
        <button
          type="submit"
          className="px-8 py-2 bg-black text-white rounded-lg hover:bg-transparent hover:border hover:border-black"
        >
          Submit
        </button>
        
      </motion.form>
      {success && (
          <div className="text-green-500 text-center  relative font-semibold mt-2">
            {success}
          </div>
        )}

      {/* Bottom Section */}
      <div className="border-t border-white mt-5 outline-none flex justify-between items-center w-full">
        <div className="flex p-3 px-6 gap-10">
          <p className="text-white">© 2025 All rights reserved</p>
        </div>
        <div className="flex p-3 px-6 gap-10">
          <FaInstagram className="text-2xl hover:text-white" />
          <FaTwitter className="text-2xl hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;