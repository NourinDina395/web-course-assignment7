import React, { useState } from 'react';
import { useTimeline } from '../context/TimelineContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, MessageCircle, Video } from 'lucide-react';

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filteredTimeline = filter === 'all'
    ? timeline
    : timeline.filter(entry => entry.type.toLowerCase() === filter);

  const getIcon = (type) => {
    if (type === 'Call') return <Phone className="text-blue-600" size={24} />;
    if (type === 'Text') return <MessageCircle className="text-green-600" size={24} />;
    if (type === 'Video') return <Video className="text-purple-600" size={24} />;
    if (type === 'Meetup') return <span className="text-3xl">🤝</span>;
    return <span className="text-3xl">🤝</span>;
  };

  // Safe date formatter - prevents "Invalid Date"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // fallback if date is invalid
    }
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 bg-white min-h-screen">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Timeline</h1>

        {/* Filter Dropdown */}
        <div className="mb-10">
          <div className="relative w-full max-w-xs">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-2xl px-5 py-3.5 text-gray-700 appearance-none focus:outline-none focus:border-emerald-600 cursor-pointer"
            >
              <option value="all">Filter timeline</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
              {/* <option value="meetup">Meetup</option> */}
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              ▼
            </div>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-4">
          {filteredTimeline.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No interactions yet. Start connecting!
            </div>
          ) : (
            filteredTimeline.map((entry) => (
              <div 
                key={entry.id} 
                className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div className="mt-1">
                  {getIcon(entry.type)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-lg">{entry.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {formatDate(entry.date)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Timeline;