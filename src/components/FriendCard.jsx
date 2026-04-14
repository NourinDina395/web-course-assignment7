import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusStyles = {
    overdue: 'bg-red-500 text-white',
    'almost due': 'bg-orange-500 text-white',
    'on-track': 'bg-emerald-600 text-white',
  };

  const tagColors = {
    WORK: 'bg-blue-100 text-blue-700',
    FAMILY: 'bg-purple-100 text-purple-700',
    HOBBY: 'bg-teal-100 text-teal-700',
    TRAVEL: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block group">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        
        {/* Avatar */}
        <div className="mx-auto mb-5">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
          />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-xl text-gray-900 mb-1">{friend.name}</h3>

        {/* Days ago */}
        <p className="text-sm text-gray-500 mb-6">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-4 py-1.5 rounded-full font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div
          className={`mx-auto px-6 py-2 rounded-full text-sm font-semibold ${statusStyles[friend.status] || 'bg-gray-500 text-white'}`}
        >
          {friend.status === 'almost due' ? 'Almost Due' : 
           friend.status === 'on-track' ? 'On-Track' : 'Overdue'}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;