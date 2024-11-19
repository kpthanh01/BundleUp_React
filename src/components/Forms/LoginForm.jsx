import React from 'react';

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <input type="checkbox" id="check" />
          <label htmlFor="check">Check me out</label>
        </div>
        <button type="submit" className="btn">Sign In</button>
      </form>
      <p>
        If you do not have an account, then <a href="/signup">Sign-Up here</a>
      </p>
    </div>
  );
};

export default Login;
