import React from 'react'
import './forms.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as userService from '../../services/userService'

const SignUp = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    address: '',
    type: 'Individual',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newUserResponse = await userService.signup(formData)
      props.setUser(newUserResponse.user)
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  return (
    <div className="form-container">
      <h2>Create An Account</h2>
      <p>{message}</p>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" name="username" id="username" placeholder="Enter username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="address" name="address" id="address" placeholder="Enter your address" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Account Type:</label>
          <select type="type" name="type" id="type" onChange={handleChange}>
            <option value="Individual">Individual</option>
            <option value="Vendor">Vendor</option>
          </select >
        </div>
        <p>Note: If you are not creating an account for a business, you're probably an individual account!</p>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create Account</button>
        <Link to="/">
          <button className='btn btn-primary'>Cancel</button>
        </Link>
      </form>
    </div>
  )
}

export default SignUp
