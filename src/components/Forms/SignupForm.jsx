import React from 'react'
import './forms.css'
import { useState } from 'react';

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Create An Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-email">Confirm Email address</label>
          <input type="email" id="confirm-email" placeholder="Confirm your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="address" id="address" placeholder="Enter your address" />
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select type="accountType" id="accountType">
            <option value="individual">Individual</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        <button type="submit" className="btn">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
