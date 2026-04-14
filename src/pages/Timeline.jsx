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
    if (type === 'Call') return <Phone className="text-blue-600" />;
    if (type === 'Text') return <MessageCircle className="text-green-600" />;
    return <Video className="text-purple-600" />;
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Interaction Timeline</h1>

          <div className="flex gap-2">
            {['all', 'call', 'text', 'video'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredTimeline.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No interactions yet. Start connecting!</p>
          ) : (
            filteredTimeline.map(entry => (
              <div key={entry.id} className="flex gap-6 bg-base-100 p-6 rounded-2xl shadow">
                <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center flex-shrink-0">
                  {getIcon(entry.type)}
                </div>
                <div>
                  <div className="font-semibold text-lg">{entry.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{entry.date}</div>
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