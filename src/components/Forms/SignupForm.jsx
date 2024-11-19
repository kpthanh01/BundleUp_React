import React from 'react'
import './forms.css'
import { useState } from 'react'

const SignUp = () => {
  const initialState = {
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
    type: ""
  }
  const [formData, setFormData] = useState()

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    res.json({message: "submitted!"})
  }

  return (
    <div className="form-container">
      <h2>Create An Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" placeholder="Enter username" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-email">Confirm Email address</label>
          <input type="email" id="confirm-email" placeholder="Confirm your email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="address" id="address" placeholder="Enter your address" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select type="accountType" id="accountType" onChange={handleChange}>
            <option value="individual">Individual</option>
            <option value="vendor">Vendor</option>
          </select >
        </div>
        <p>Note: If you are not creating an account for a business, you're probably an individual account!</p>
        <button type="submit" className="btn" onClick={handleSubmit}>Create Account</button>
      </form>
    </div>
  )
}

export default SignUp
