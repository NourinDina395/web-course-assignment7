import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTimeline } from '../context/TimelineContext';
import { Phone, MessageCircle, Video, Clock, Target, Calendar, Edit2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToTimeline } = useTimeline();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  const handleAction = (type) => {
    addToTimeline(friend.name, type);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 bg-white min-h-screen">
        
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-ghost mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-600"
        >
          ← Back to Friends
        </button>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left Column - Profile Info Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-40 h-40 rounded-full object-cover mb-6 ring-4 ring-white shadow" 
              />
              <h2 className="text-3xl font-semibold text-gray-900 mb-1">{friend.name}</h2>
              
              <div className="flex gap-2 my-4">
                <span className="px-5 py-1 bg-red-500 text-white text-sm font-medium rounded-full">Overdue</span>
                <span className="px-5 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">FAMILY</span>
              </div>

              <p className="text-gray-600 italic mb-2">"Former colleague, great mentor"</p>
              <p className="text-gray-500 text-sm">Preferred: email</p>

              <div className="w-full mt-8 space-y-3">
                <button className="btn btn-outline w-full justify-center gap-3 text-gray-800 font-bold">
                    ⏰ Snooze 2 Weeks
                    </button>
                <button className="btn btn-outline w-full justify-center gap-3 text-gray-800 font-bold">
                 📦 Archive
                </button>
                <button className="btn btn-outline w-full justify-center gap-3 text-red-500 font-bold">
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                {/* <Clock className="mx-auto mb-3 text-emerald-600" size={28} /> */}
                <div className="text-3xl font-bold text-gray-900">{friend.days_since_contact}</div>
                <div className="text-sm text-gray-500">Days Since Contact</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                {/* <Target className="mx-auto mb-3 text-emerald-600" size={28} /> */}
                <div className="text-3xl font-bold text-gray-900">{friend.goal}</div>
                <div className="text-sm text-gray-500">Goal (Days)</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                {/* <Calendar className="mx-auto mb-3 text-emerald-600" size={28} /> */}
              <div className="text-xl font-semibold text-gray-900">
                {new Date(friend.next_due_date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).replace(' ', ', ')}
                </div>
                <div className="text-sm text-gray-500">Next Due</div>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold text-xl text-green-950">Relationship Goal</h3>
                  <p className="text-gray-600 mt-1">Connect every
                    <span className="text-gray-900 font-semibold"> {friend.goal} days  </span>

                    </p>
                </div>
                <button className="btn btn-sm btn-outline flex items-center gap-2 bg-gray-400">
                  <Edit2 size={16} /> Edit
                </button>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="font-semibold text-xl text-green-950 mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleAction('Call')}
                  className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition border border-gray-100"
                >
                  <Phone size={32} className="text-gray-900" />
                  <span className="text-gray-900 font-medium text-sm">Call</span>
                </button>

                <button
                  onClick={() => handleAction('Text')}
                  className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition border border-gray-100"
                >
                  <MessageCircle size={32} className="text-gray-900" />
                  <span className="text-gray-900 font-medium text-sm">Text</span>
                </button>

                <button
                  onClick={() => handleAction('Video')}
                  className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition border border-gray-100"
                >
                  <Video size={32} className="text-gray-900" />
                  <span className="text-gray-900 font-medium text-sm">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FriendDetails;