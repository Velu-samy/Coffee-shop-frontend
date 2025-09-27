import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Rproduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/coffees");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const cardAnimation = {
    initial: { x: 0, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.5, delay: 0.4 },
  };

  return (
    <div className="min-h-screen p-6 font-custom">
      <h1 className="text-center font-bold text-5xl mb-6">Our Coffees</h1>

    <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-9">
        {products.length > 0 ? (
          products.map((product) => (
            <motion.div
              {...cardAnimation}
              key={product.id}
              className=" rounded-xl  drop-shadow-lg text-center card w-60 mb-5 "
            >
              <div className="h-40 overflow-hidden mb-3">
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "/placeholder.jpg")}
                />
              </div>
         <div className="contents mb-5">
               <p className="font-medium text-sm">{product.name}</p>
              <p className="font-medium text-sm mt-2">₹{product.price}</p>

          
         </div>
         <div className="button-box relative top-5">
            <Link to={`/singleproduct/coffee/${product.id}`}>
                <button className="mt-4 px-4 w-24 py-2 bg-black text-white   rounded-md hover:bg-gray-800">
                  View
                </button>
              </Link>
         </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Loading products...
          </p>
        )}
      </div>
    </div>

      <div className="flex justify-center w-full">
      <Link to='/product' >
        <button className="mt-8 bg-black px-5 py-2 rounded-sm text-white hover:bg-gray-800">
          Show More
        </button>
      </Link>
      
      </div>
    </div>
  );
}

export default Rproduct;