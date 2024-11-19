import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const DateRangePicker = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleDateChange = (e, field) => {
    setRecurrence({ ...recurrence, [field]: e.target.value });
  };

  return (
    <div className="p-4 border rounded-md mt-4">
      <h3 className="font-bold">Date Range</h3>
      <div className="mt-2">
        <label className="block">Start Date</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={recurrence.startDate || ''}
          onChange={(e) => handleDateChange(e, 'startDate')}
        />
      </div>
      <div className="mt-2">
        <label className="block">End Date</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={recurrence.endDate || ''}
          onChange={(e) => handleDateChange(e, 'endDate')}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
