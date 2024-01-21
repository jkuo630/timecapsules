import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    // Remove non-numeric characters from the input
    const input = e.target.value.replace(/\D/g, '');
    const maxLength = 10; // Set your desired maximum length for a phone number
    const truncatedInput = input.slice(0, maxLength);

    // Format the phone number as (XXX)-XXX-XXXX
    const formattedPhoneNumber = truncatedInput.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      type="text"
      placeholder="Cell Number"
      value={phoneNumber}
      onChange={handleInputChange}
    />
  );
};

export default PhoneNumberInput;
