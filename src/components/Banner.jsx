import React from 'react';
import { Users } from 'lucide-react';

const Banner = () => {
  return (
    <div className="pt-16 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Banner Box with Dotted Border */}
        <div className="border rounded-3xl p-12 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Friends to keep close in your life
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Your personal shelf of meaningful connections. Browse, tend, and nurture 
            the relationships that matter most.
          </p>

          <button className="btn bg-emerald-700 hover:bg-emerald-800 text-white text-lg px-10 py-3.5 rounded-2xl flex items-center gap-3 mx-auto shadow-lg transition-all">
            <Users size={24} />
            Add a Friend
          </button>
        </div>

        {/* Summary Cards - 4 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold text-emerald-700 mb-2">10</div>
            <div className="text-gray-600 font-medium">Total Friends</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold text-emerald-700 mb-2">3</div>
            <div className="text-gray-600 font-medium">On Track</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold text-emerald-700 mb-2">6</div>
            <div className="text-gray-600 font-medium">Need Attention</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-5xl font-bold text-emerald-700 mb-2">12</div>
            <div className="text-gray-600 font-medium">Interactions This Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;