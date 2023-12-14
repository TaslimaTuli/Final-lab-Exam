'use client'

import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateRegistrationForm = () => {
    if (!fullName || !email || !password || !confirmPassword) {
    //   setError('Please fill in all fields');
    //   return false;
      alert('Please fill in all fields');
    return false;
    }

    if (password !== confirmPassword) {
    //   setError('Passwords do not match');
    //   return false;
      alert('Passwords do not match!');
      return false;
    }

    return true;
  };

  const handleRegistration = () => {
    if (validateRegistrationForm()) {
         alert('Success!');

    }
  };

  return (
    <div>
        <center>
      <h1>Registration</h1>
      <form>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
      </center>
    </div>
  );
};

export default Registration;
