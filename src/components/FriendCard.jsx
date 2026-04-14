import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusColor = {
    overdue: 'bg-red-100 text-red-700',
    'almost due': 'bg-amber-100 text-amber-700',
    'on-track': 'bg-emerald-100 text-emerald-700',
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="card bg-base-100 shadow hover:shadow-xl transition-all duration-300 h-full">
        <figure className="px-6 pt-6">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{friend.name}</h2>
          <p className="text-sm text-gray-500">{friend.days_since_contact} days ago</p>

          <div className="flex flex-wrap gap-2 justify-center my-3">
            {friend.tags.map((tag, i) => (
              <div key={i} className="badge badge-outline badge-sm">{tag}</div>
            ))}
          </div>

          <div className={`px-4 py-1 rounded-full text-sm font-medium ${statusColor[friend.status]}`}>
            {friend.status.replace('-', ' ')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;