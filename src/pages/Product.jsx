import React from 'react'

const Product = () => {


      const [products, setProducts] = useState([])
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://coffee-shop-backend-2-vud1.onrender.com/coffees')
            setProducts(response.data)
          } catch (error) {
            console.error('Error fetching products:', error)
          }
        }
    
        fetchProducts()
      }, [])
    
  return (
    <div>
      <div>
      <h1 className='text-center font-bold text-5xl mt-5'>Our Products</h1>

      <div className='Product-container gap-y-10 lg:max-w-6xl lg:mx-auto lg:px-4 mb-10 lg:grid flex flex-col grid-cols-1 lg:grid-cols-4 items-center gap-3 mt-10'>
        {products.map((product) => (
          <div key={product.id} className='produt-card drop-shadow-md shadow-sm rounded-sm    h-72  flex justify-center flex-col items-center'>
            <div className='img-container w-56 border border-brown  rounded-md overflow-hidden ' >
              <img
                src={`https://coffee-shop-backend-2-vud1.onrender.com/storage/${product.image}`}
                className=' rounded-md'
                alt={product.name}
              />
            </div>
            <div className='content-continer w-56 px-5 pt-1 text-center bg-slate-50 rounded-md'>
              <h2 className='font-semibold text-xl'>{product.name}</h2>
              <p className='text-orange-600 font-bold'>₹{product.price || '---'}</p>
              <p className='text-sm text-gray-600 mt-2'>
                {product.description.slice(0,10) || 'No description available.'}
              </p>
              <div className='relative top-4'>
                <a href={`/singleproduct/${product.id}`}>
                  <button className='bg-black px-8 py-2 rounded-2xl text-white font-semibold'>
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center mt-14'>
        <button className='px-12 py-2 bg-black text-white rounded-3xl'>Show More</button>
      </div>
    </div>
    </div>
  )
}

export default Product
