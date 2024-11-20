import React from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfileDetails = (props) => {
    const [userData, setUserData] = useState({})
    
    const getUserInfo = () => {
        const userId = props.user._id
        const res = userService.getUserData(userId)
        console.log(res)
        setUserData({
            username: `${res.data.username}`,
            email: `${res.data.email}`,
            phoneNumber: `${res.data.phoneNumber}`,
            address: `${res.data.address}`,
            type: `${res.data.type}`,
          })
          console.log(userData)
    }

    const handleSignout = () => {
        userService.signout()
        props.setUser(null)
    }
return (
    <div>
        <h2>User Profile</h2>
        <h3 onClick={getUserInfo}>Account information</h3>
        <Link to="/">
            <button onClick={handleSignout}>Sign out</button>
        </Link>
    </div>
)
}

export default ProfileDetails