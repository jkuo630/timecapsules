import React, { useState } from 'react';

const TimeInput = () => {
  const [time, setTime] = useState('');

  const handleInputChange = (e) => {
    // Remove non-numeric characters from the input
    const input = e.target.value.replace(/\D/g, '');
    const maxLength = 4; // Set your desired maximum length for a time (HH:mm)
    const truncatedInput = input.slice(0, maxLength);

    // Format the time as HH:mm
    const formattedTime = truncatedInput.replace(/(\d{2})(\d{2})/, '$1:$2');

    setTime(formattedTime);
  };

  return (
    <input
      type="text"
      placeholder="Enter 24-hour time (HH:mm)"
      value={time}
      onChange={handleInputChange}
      pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
      title="Enter a valid 24-hour time (HH:mm)"
      required
    />
  );
};

export default TimeInput;
