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
      .get(`http://127.0.0.1:8000/Drink/${id}`)
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
      <div className="singleproductcontainer  p-10 font-custom">

        {loading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-10">{error}</p>
        ) : (
          <div className="contents-container flex p-7 mt-10  gap-20 shadow-md justify-center items-center">
            <div className="img-container w-1/2 pl-20 p-20">
              <img
                src={`http://127.0.0.1:8000/storage/${product.image}`}
                className="rounded-md"
                alt={product.name}
              />
            </div>

            <div className="product-details w-1/2">
              <h1 className="text-5xl font-bold mb-3">{product.name}</h1>
              <p className="mb-5">{product.description}</p>
              <p className="px-5 py-1 border-orange-300 border-2 font-serif inline-block shadow-sm rounded-sm">
                ₹{product.price}
              </p>

              <div className="flex mt-10 items-center gap-3">
                <button onClick={decreaseQty} className="px-3 py-1 border border-black">−</button>
                <span className="px-4 py-1 border border-gray-300">{quantity}</span>
                <button onClick={increaseQty} className="px-3 py-1 border border-black">+</button>
              </div>

              <div className="mt-10 btn-container flex gap-3 w-96">
                <button onClick={handleAddToCart} className="px-5 py-1 border border-black bg-green-500 text-white">
                  Add to Cart
                </button>
                <button className="px-5 py-1 border border-black">Fav</button>
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