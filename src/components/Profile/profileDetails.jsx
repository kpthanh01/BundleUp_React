import React from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
        </ul>
        <Link to="/">
            <button onClick={handleSignout}>Sign out</button>
        </Link>
    </div>
)
}

export default ProfileDetails