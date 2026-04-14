import React from 'react';
import { Users } from 'lucide-react';

const Banner = () => {
  return (
    <div className="pt-12 pb-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-3">Friends to keep close in your life</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="btn bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full flex items-center gap-3 mx-auto">
          <Users size={22} />
          Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-emerald-700">10</div>
            <div className="text-gray-500 mt-1">Total Friends</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-emerald-700">3</div>
            <div className="text-gray-500 mt-1">On Track</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-emerald-700">6</div>
            <div className="text-gray-500 mt-1">Need Attention</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-emerald-700">12</div>
            <div className="text-gray-500 mt-1">Interactions This Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;