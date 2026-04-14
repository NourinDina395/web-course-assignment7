import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (friendName, type) => {
    const entry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],   // "2026-04-15" format
      type: type,
      title: `${type} with ${friendName}`,
    };

    // Add new entry at the top
    setTimeline((prev) => [entry, ...prev]);

    // Show success toast
    toast.success(`${type} logged with ${friendName}!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);