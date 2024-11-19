import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRecurrence } from '../context/RecurrenceContext';

const DatePreview = () => {
  const { recurrence } = useRecurrence();

  const computeDates = () => {
    const dates = [];
    if (recurrence.startDate) {
      dates.push(new Date(recurrence.startDate));
    }
    return dates;
  };

  return (
    <div className="p-4 border rounded-md mt-4">
      <h3 className="font-bold">Selected Dates</h3>
      <Calendar
        tileClassName={({ date }) =>
          computeDates().some((d) => d.toDateString() === date.toDateString())
            ? 'bg-blue-500 text-white'
            : null
        }
      />
    </div>
  );
};

export default DatePreview;
