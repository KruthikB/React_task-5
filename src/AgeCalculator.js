// src/AgeCalculator.js
import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h3>Enter your Date of Birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br></br>
      <button onClick={calculateAge}>Calculate Age</button>
      <h1>You are {age} years old</h1>
    </div>
  );
};

export default AgeCalculator;
