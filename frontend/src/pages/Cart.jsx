import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        const validCart = parsedCart.filter(item => item && item.id && item.qty);
        setCart(validCart);
      } catch (err) {
        console.error('Error parsing cart:', err);
        setCart([]);
      }
    }
  }, []);

  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleConfirmAddress = () => {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');

    if (!token || !username) {
      alert('Please login to proceed to address confirmation.');
      navigate('/login');
      return;
    }

    navigate('/adress', { state: { cart, username } });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="px-4 py-6 max-w-full md:max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-800 mt-20">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-600 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 md:px-4 py-2 text-left">Item</th>
                <th className="px-2 md:px-4 py-2 text-center">Qty</th>
                <th className="px-2 md:px-4 py-2 text-center">Price</th>
                <th className="px-2 md:px-4 py-2 text-center">Total</th>
                <th className="px-2 md:px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={`${item.id}-${item.name}`} className="border-t">
                  <td className="px-2 md:px-4 py-2">{item.name}</td>
                  <td className="px-2 md:px-4 py-2 text-center">{item.qty}</td>
                  <td className="px-2 md:px-4 py-2 text-center">₹{item.price}</td>
                  <td className="px-2 md:px-4 py-2 text-center">₹{(item.price * item.qty).toFixed(2)}</td>
                  <td className="px-2 md:px-4 py-2 text-center space-x-1 md:space-x-2">
                    <button onClick={() => decreaseQty(item.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm">−</button>
                    <button onClick={() => increaseQty(item.id)} className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-sm">+</button>
                    <button onClick={() => removeItem(item.id)} className="bg-gray-500 text-white px-2 py-1 rounded text-xs md:text-sm">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="font-semibold text-lg mb-4 md:mb-0">
              Grand Total: ₹{total.toFixed(2)}
            </p>
            <button
              onClick={handleConfirmAddress}
              className="bg-col text-white px-4 py-2 rounded hover:bg-black w-full md:w-auto"
            >
              Confirm Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;