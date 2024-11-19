import React from 'react';
import './forms.css';

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Create An Account</h2>
      <form>
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
        <button type="submit" className="btn">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
