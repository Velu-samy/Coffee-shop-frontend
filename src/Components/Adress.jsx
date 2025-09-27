import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Address() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    receiver_name: '',
    mobile: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    landmark: '',
    delivery_instructions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length !== 1) {
      alert('Only one item can be ordered at a time.');
      return;
    }

    const item = cart[0];

    const orderData = {
      ...formData,
      product_name: item.name,
      quantity: item.qty,
      price: Number(item.price),
      total: Number(item.price) * Number(item.qty),
    };

    console.log('📦 Sending order:', orderData);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/orders',
        orderData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );
      console.log('✅ Order response:', response.data);
      alert('Order placed successfully! Order ID: ' + response.data.order_id);
      localStorage.removeItem('cart');
      navigateTo('/success');
    } catch (error) {
      console.error('❌ Order failed:', error.response?.data || error.message);
      alert('Failed to place order. Check console for details.');
    }
  };

  return (
    <div className=" mx-96 mt-10 p-6 bg-white shadow-lg  m-10 rounded-lg">
      <h2 className="text-2xl text-center font-bold mb-4 text-gray-800"> Confirm Parcel Details</h2>

      {/* Cart Summary */}
      <div className="mb-6 bg-gray-50 p-4 rounded-md border">
        <h3 className="text-lg font-semibold mb-2 text-center"> Cart Summary</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          <ul className="list-disc flex justify-center items-center pl-5">
            {cart.map(item => (
              <li key={item.id}>
                {item.name} × {item.qty} — ₹{(item.price * item.qty).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Address Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="receiver_name" placeholder="Receiver Name" value={formData.receiver_name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded-md" rows="3" required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded-md" required />
        <input type="text" name="landmark" placeholder="Landmark (optional)" value={formData.landmark} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <textarea name="delivery_instructions" placeholder="Delivery Instructions (optional)" value={formData.delivery_instructions} onChange={handleChange} className="w-full p-2 border rounded-md" rows="2" />
        <button type="submit" className="w-full bg-col text-white py-2 rounded-md hover:bg-transparent  hover:text-black border-black border transition">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Address;