import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Thank you for registering, ${name}! We will send promotions to ${email}.`);
  };

  return (
    <div className="registration-block">
      <div className="linkBlock">
        <Link to="/">Home</Link>
        <Link to="/order">Shop</Link>
        <Link to="/registration">Registration</Link>
      </div>
      <h2>Register to Receive Promotions</h2>
      <p>Enter your name and email address to receive promotions by email</p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Registration Information</legend>

          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>

          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationInfo;
