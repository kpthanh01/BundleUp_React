import {React, useState} from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';
import "./Profile.css"

const Profile = (props) => {
  const [isAIVisible, setIsAIVisible] = useState(true)
  const [isAIFormVisible, setIsAIFormVisible] = useState(false)
  const [isJEVisible, setIsJEVisible] = useState(false)
  const [formData, setFormData] = useState({
    username: `${props.userData.username}`,
    email: `${props.userData.email}`,
    phoneNumber: `${props.userData.phoneNumber}`,
    address: `${props.userData.address}`,
    type: `${props.userData.type}`,
  })

    const handleSignout = () => {
        userService.signout()
        props.setUser(null)
    }
    const handleClick = () => {
      isAIVisible ? setIsAIVisible(false) : setIsAIVisible(true)
      isJEVisible ? setIsJEVisible(false) : setIsJEVisible(true)
    }

    const formVisible = () => {
      isAIFormVisible ? setIsAIFormVisible(false) : setIsAIFormVisible(true)
      setIsAIVisible(false)
      setIsJEVisible(false)
    }

    const formHidden = () => {
      setIsAIFormVisible(false)
      setIsAIVisible(true)
    }

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const userId = props.userData._id
      try {
        const newUserResponse = await userService.update(userId, formData)
        props.setUser(newUserResponse.user)
        setIsAIFormVisible(false)
        setIsAIVisible(true)
        alert("User information updated!")
      } catch (err) {
        alert("Sorry, that didn't work. Try again.")
      }
    }

return (
    <div>
        <h2>Welcome, {props.userData.username}!</h2>
        <h3 onClick={handleClick}>Account information</h3>
        {isAIVisible ? <div className='accountInfo'>
            <ul>
                <li>Username: {props.userData.username}</li>
                <li>Email: {props.userData.email}</li>
                <li>Address: {props.userData.address}</li>
                <li>Phone Number: {props.userData.phoneNumber}</li>
                <li>Type: {props.userData.type}</li>
            </ul>
            <button onClick={formVisible}>Edit Profile</button>
        </div> : <></>}
        {isAIFormVisible ? <form>
          <label htmlFor="username">Username:</label>
          <input type="username" name="username" id="username" defaultValue={props.userData.username} onChange={handleChange}/>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" id="email" defaultValue={props.userData.email} onChange={handleChange}/>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="phoneNumber" name="phoneNumber" id="phoneNumber" defaultValue={props.userData.phoneNumber} onChange={handleChange}/>
          <label htmlFor="address">Address:</label>
          <input type="address" name="address" id="address" defaultValue={props.userData.address} placeholder="Enter your address" onChange={handleChange}/>
          <label htmlFor="type">Account Type:</label>
          <select type="type" name="type" id="type" defaultValue={props.userData.type} onChange={handleChange}>
            <option value="Individual">Individual</option>
            <option value="Vendor">Vendor</option>
          </select >
          <button type="submit" onClick={handleSubmit}>Update Account</button>
          <button onClick={formHidden}>Cancel</button>
        </form>
        : <></>}
        <h3 onClick={handleClick}>Joined Events</h3>
        {isJEVisible ? <div className='joinedEvents'>
          <p>{props.userData.joinedEvents}</p>
        </div> : <></>}
        <h3>Delete Account</h3>
        <Link to="/">
            <button onClick={handleSignout}>Sign out</button>
        </Link>
    </div>
)
}

export default Profile