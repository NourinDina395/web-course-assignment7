import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTimeline } from '../context/TimelineContext';
import { Phone, MessageCircle, Video, Clock, Target, Calendar } from 'lucide-react';
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

  if (!friend) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const handleAction = (type) => {
    addToTimeline(friend.name, type);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <button onClick={() => navigate(-1)} className="btn btn-ghost mb-6">← Back</button>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Profile */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={friend.picture} alt={friend.name} className="rounded-full w-48 h-48 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl">{friend.name}</h2>
              <p className="text-gray-500">{friend.email}</p>

              <div className="flex gap-2 my-4">
                {friend.tags.map((tag, i) => (
                  <div key={i} className="badge badge-lg">{tag}</div>
                ))}
              </div>

              <p className="text-gray-600">{friend.bio}</p>

              <div className="card-actions mt-8 flex gap-3">
                <button className="btn btn-outline">Snooze 2 Weeks</button>
                <button className="btn btn-outline">Archive</button>
                <button className="btn btn-error">Delete</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="stat bg-base-100 shadow rounded-xl p-6 text-center">
                <Clock className="mx-auto mb-2 text-emerald-600" size={32} />
                <div className="text-3xl font-bold">{friend.days_since_contact}</div>
                <div className="text-sm opacity-70">Days Since Contact</div>
              </div>
              <div className="stat bg-base-100 shadow rounded-xl p-6 text-center">
                <Target className="mx-auto mb-2 text-emerald-600" size={32} />
                <div className="text-3xl font-bold">{friend.goal}</div>
                <div className="text-sm opacity-70">Goal (days)</div>
              </div>
              <div className="stat bg-base-100 shadow rounded-xl p-6 text-center">
                <Calendar className="mx-auto mb-2 text-emerald-600" size={32} />
                <div className="text-sm font-medium">{friend.next_due_date}</div>
                <div className="text-sm opacity-70">Next Due</div>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-6">Quick Check-In</h3>
                <div className="grid grid-cols-3 gap-6">
                  <button
                    onClick={() => handleAction('Call')}
                    className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition"
                  >
                    <Phone size={40} className="text-emerald-600" />
                    <span className="font-medium">Call</span>
                  </button>

                  <button
                    onClick={() => handleAction('Text')}
                    className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition"
                  >
                    <MessageCircle size={40} className="text-emerald-600" />
                    <span className="font-medium">Text</span>
                  </button>

                  <button
                    onClick={() => handleAction('Video')}
                    className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-2xl transition"
                  >
                    <Video size={40} className="text-emerald-600" />
                    <span className="font-medium">Video</span>
                  </button>
                </div>
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