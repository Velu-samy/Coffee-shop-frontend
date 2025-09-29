import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navabr';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Singledrink() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    axios
      .get(`https://coffee-shop-backend-2-vud1.onrender.com/Drink/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch product');
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({ ...product, qty: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart after add:', cart);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <Navbar />
      <div className="singleproductcontainer px-4 py-10 font-custom">
        {loading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-10">{error}</p>
        ) : (
          <div className="contents-container flex flex-col lg:flex-row p-5 lg:p-10 mt-10 gap-10 lg:gap-20 shadow-md justify-center items-center">
            
            {/* Image Section */}
            <div className="img-container w-full lg:w-1/2 overflow-hidden mb-6 lg:mb-0">
              <img
                src={`https://coffee-shop-backend-2-vud1.onrender.com/${product.image}`}
                className="rounded-md w-full max-w-md mx-auto"
                alt={product.name}
              />
            </div>

            {/* Product Details */}
            <div className="product-details w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-3">{product.name}</h1>
              <p className="mb-5 text-sm lg:text-base">{product.description}</p>
              <p className="px-5 py-1 border-orange-300 border-2 font-serif inline-block shadow-sm rounded-sm mb-5">
                ₹{product.price}
              </p>

              {/* Quantity Controls */}
              <div className="flex justify-center lg:justify-start mt-6 items-center gap-3">
                <button onClick={decreaseQty} className="px-3 py-1 border border-black hover:bg-slate-200">−</button>
                <span className="px-4 py-1 border border-gray-300">{quantity}</span>
                <button onClick={increaseQty} className="px-3 py-1 border border-black hover:bg-slate-200">+</button>
              </div>

              {/* Buttons */}
              <div className="mt-8 btn-container flex flex-col sm:flex-row gap-4 sm:gap-10 w-full sm:w-96 mx-auto lg:mx-0">
                <button onClick={handleAddToCart} className="px-5 py-2 border border-black bg-green-500 text-white hover:bg-green-600">
                  Add to Cart
                </button>
                <button className="px-5 py-2 border border-black hover:bg-black hover:text-white">
                  Fav
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Singledrink;