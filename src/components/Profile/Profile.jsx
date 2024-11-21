import React from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';
import "./Profile.css"

const ProfileDetails = (props) => {
    const handleSignout = () => {
        userService.signout()
        props.setUser(null)
    }
return (
    <div>
        <h2>User Profile</h2>
        <h3>Account information</h3>
        <ul>
            <li>Username: {props.userData.username}</li>
            <li>Email: {props.userData.email}</li>
            <li>Address: {props.userData.address}</li>
            <li>Phone Number: {props.userData.phoneNumber}</li>
            <li>Type: {props.userData.type}</li>
        </ul>
        <button>Edit Profile</button>
        <Link to="/">
            <button onClick={handleSignout}>Sign out</button>
        </Link>
    </div>
)
}

export default ProfileDetails