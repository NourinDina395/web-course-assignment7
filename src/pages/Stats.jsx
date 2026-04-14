import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/TimelineContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Stats = () => {
  const { timeline } = useTimeline();

  // Count only Call, Text, Video
  const callCount = timeline.filter(t => t.type === 'Call').length;
  const textCount = timeline.filter(t => t.type === 'Text').length;
  const videoCount = timeline.filter(t => t.type === 'Video').length;

  const data = [
    { name: 'Text', value: textCount, fill: '#8b5cf6' },   
    { name: 'Call', value: callCount, fill: '#10b981' },  
    { name: 'Video', value: videoCount, fill: '#22c55e' }, 
  ].filter(item => item.value > 0); 

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 bg-white min-h-screen">
        
        <h1 className="text-4xl font-bold text-gray-950 mb-12 text-center">
          Friendship Analytics
        </h1>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">
          
          <p className="text-gray-600 mb-10 text-center text-lg">
            By Interaction Type
          </p>

          <div className="flex justify-center mb-10">
            <div style={{ width: '340px', height: '340px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={88}
                    outerRadius={145}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

         
          <div className="flex justify-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-gray-700 font-medium">Text</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-700"></div>
              <span className="text-gray-700 font-medium">Call</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span className="text-gray-700 font-medium">Video</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Stats;