import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/TimelineContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const COLORS = ['#10b981', '#22c55e', '#86efac'];

const Stats = () => {
  const { timeline } = useTimeline();

  const data = [
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Friendship Analytics</h1>

        <div className="max-w-2xl mx-auto bg-base-100 p-10 rounded-3xl shadow-xl">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stats;