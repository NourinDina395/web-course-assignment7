import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (friendName, type) => {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB'),
      type: type,
      title: `${type} with ${friendName}`,
    };

    setTimeline((prev) => [entry, ...prev]);
    toast.success(`${type} logged with ${friendName}!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);