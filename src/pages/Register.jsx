import React from 'react'
import img from '../assets/login.jpg'

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center   px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl  rounded-lg shadow-soft-black overflow-hidden">
        
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img src={img} alt="Register Visual" className="object-cover w-full h-full" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-sm rounded-lg  p-6">
            <form className="flex flex-col gap-4">
              <h2 className="font-custom font-bold text-3xl text-black text-center">Register</h2>

              <input
                type="text"
                className="border border-gray-300 w-full py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />

              <input
                type="password"
                className="border border-gray-300 w-full py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />

              <input
                type="email"
                className="border border-gray-300 w-full py-2 px-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />

              <a href="/login" className="text-sm  hover:underline text-center">
                Already have an account?
              </a>

              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register