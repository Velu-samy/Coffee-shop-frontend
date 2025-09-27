import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Order Placed Successfully!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your parcel is on its way!</p>
      <button
        onClick={handleBackToHome}
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Success;