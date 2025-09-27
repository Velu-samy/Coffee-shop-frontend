import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../Components/Navabr";
import Footer from "../Components/Footer"

const Product = () => {
  const scrollRefc = useRef(null); // Cold Coffee row
  const scrollRefd = useRef(null); // Hot Coffee row (future use)
  const scrollRefs = useRef(null); // Specials row (future use)

  const [coffee, setCoffee] = useState([]);
  const [coffees,setCoffees]=useState([]);
  const [coffeed,setCoffeed]=useState([]); 

  useEffect(() => {
    const fetchColdCoffee = async () => {
      try {
        const res = await fetch("https://coffee-shop-backend-2-vud1.onrender.com/coffee"); // Replace with your actual endpoint
        const product = await res.json();
        setCoffee(product);
        console.log("Cold Coffee:", product);
      } catch (err) {
        console.error("Error fetching cold coffee:", err);
      }
    };

    fetchColdCoffee();
  }, []);



  useEffect(() => {
    const fetchColdCoffee = async () => {
      try {
        const res = await fetch("https://coffee-shop-backend-2-vud1.onrender.com/Drink"); // Replace with your actual endpoint
        const product = await res.json();
        setCoffees(product);
        console.log("Cold Coffee:", product);
      } catch (err) {
        console.error("Error fetching cold coffee:", err);
      }
    };''

    fetchColdCoffee();
  }, []);


    useEffect(() => {
    const fetchColdCoffee = async () => {
      try {
        const res = await fetch("https://coffee-shop-backend-2-vud1.onrender.com/Snacks"); // Replace with your actual endpoint
        const product = await res.json();
        setCoffeed(product);
        console.log("Cold Coffee:", product);
      } catch (err) {
        console.error("Error fetching cold coffee:", err);
      }
    };

    fetchColdCoffee();
  }, []);

  const scrollc = (direction) => {
    if (scrollRefc.current) {
      scrollRefc.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
    const scrolld = (direction) => {
    if (scrollRefd.current) {
      scrollRefd.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
    const scrolls = (direction) => {
    if (scrollRefs.current) {
      scrollRefs.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
  <div>
      <Navbar/>
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Coffee Products</h1>

      {/* Cold Coffee Row */}
      <div className="relative p-4 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-custom  font-semibold mb-3 text-center"> Coffees</h2>

        {/* Left Button */}
        <button
          onClick={() => scrollc("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrollc("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Product List */}
        <div
          ref={scrollRefc}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-6"
        >
          {coffee.length > 0 ? (
            coffee.map((product, i) => (
              <div
                key={i}
                className="min-w-[140px] flex-shrink-0 bg-white rounded-xl shadow-md p-3 text-center"
              >
               <div className="w-40 overflow-y-hidden  h-32">
                 <img
                src={`https://coffee-shop-backend-2-vud1.onrender.com/storage/${product.image}`}
                className=' rounded-md '
                alt={product.name}
              />  </div> 
                <p className="mt-2 font-medium text-sm">{product.name}</p>
                 <p className="">{product.price}</p>
<a href={`/singleproduct/coffee/${product.id}`}>
                   <button className="px-3 py-1 bg-black text-white rounded-md mt-2  ">Click</button>
</a>              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading cold coffee...</p>
          )}
        </div>
      </div>
       <div className="relative p-4 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-center">Drinks</h2>

        {/* Left Button */}
        <button
          onClick={() => scrolld("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrolld("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Product List */}
        <div
          ref={scrollRefd}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-6"
        >
          {coffees.length > 0 ? (
            coffees.map((product, i) => (
              <div
                key={i}
                className="min-w-[140px] flex-shrink-0 bg-white rounded-xl shadow-md p-3 text-center"
              >
               <div className="w-40 overflow-y-hidden  h-32">
                 <img
                src={`https://coffee-shop-backend-2-vud1.onrender.com/storage/${product.image}`}
                className=' rounded-md '
                alt={product.name}
              />  </div> 
                <p className="mt-2 font-medium text-sm">{product.name}</p>
                 <p className="">{product.price}</p>
<a href={`/singleproduct/drink/${product.id}`}>
                   <button className="px-3 py-1 bg-black text-white rounded-md mt-2  ">Click</button>
</a>                </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading cold coffee...</p>
          )}
        </div>
      </div>
       <div className="relative p-4 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-center">Snacks</h2>

        {/* Left Button */}
        <button
          onClick={() => scrolls("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrolls("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Product List */}
        <div
          ref={scrollRefs}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-6"
        >
          {coffeed.length > 0 ? (
            coffeed.map((product, i) => (
              <div
                key={i}
                className="min-w-[140px] flex-shrink-0 bg-white rounded-xl relative shadow-md p-3 text-center"
              >
               <div className="w-40 overflow-y-hidden  h-32">
                 <img
                src={`https://coffee-shop-backend-2-vud1.onrender.com/storage/${product.image}`}
                className=' rounded-md '
                alt={product.name}
              />  </div> 
                <p className="mt-2 font-medium text-sm">{product.name}</p>
                <p className="">{product.price}</p>
<a href={`/singleproduct/snacks/${product.id}`}>
                   <button className="px-3 py-1 bg-black text-white rounded-md mt-2  ">Click</button>
</a>                </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading cold coffee...</p>
          )}
          
        </div>
       
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Product;