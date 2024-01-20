import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    // Remove non-numeric characters from the input
    const input = e.target.value.replace(/\D/g, '');

    // Format the phone number as (___)-___-___
    const formattedPhoneNumber = input.replace(/(\d{3})(\d{3})(\d{3})/, '($1)-$2-$3');

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      type="text"
      placeholder="Cell Number (___)-___-___"
      value={phoneNumber}
      onChange={handleInputChange}
    />
  );
};

export default PhoneNumberInput;