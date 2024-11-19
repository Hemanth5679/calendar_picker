import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleChange = (type) => {
    setRecurrence({ ...recurrence, type });
  };

  return (
    <div className="p-4 border rounded-md">
      <h3 className="font-bold">Recurrence Options</h3>
      <select
        className="mt-2 border p-2 rounded"
        value={recurrence.type}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
