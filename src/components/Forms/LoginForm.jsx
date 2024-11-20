import React from 'react';
import './forms.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'

const Login = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign in</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="checkbox" id="check" onChange={handleChange}/>
          <label htmlFor="check">Check me out</label>
        </div>
        <Link to="/">
        <button type="submit" className="btn" onClick={handleSubmit}>Sign In</button>
        </Link>
      </form>
      <p>
        If you do not have an account, then <a href="/signup">Sign-Up here</a>
      </p>
    </div>
  );
};

export default Login;
