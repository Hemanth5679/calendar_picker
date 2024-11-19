import React, { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    type: 'Daily', // Default recurrence type
    interval: 1, // e.g., every 1 day
    daysOfWeek: [], // For weekly recurrence
    nthDay: null, // For monthly recurrence (e.g., 2nd Tuesday)
    startDate: null,
    endDate: null,
  });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
