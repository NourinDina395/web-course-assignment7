import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FriendCard from '../components/FriendCard';
import Footer from '../components/Footer';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;