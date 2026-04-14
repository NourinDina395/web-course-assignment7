import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-emerald-700 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-lg"
          >
            Go Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;