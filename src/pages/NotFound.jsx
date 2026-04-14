import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-emerald-600 mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;