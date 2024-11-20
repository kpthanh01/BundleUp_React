import React from 'react';
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom';

const ProfileDetails = (props) => {
  const handleSignout = () => {
    userService.signout()
    props.setUser(null)
  }
    return (
        <div>
            <h2>User Profile</h2>
            <Link to="/">
                <button onClick={handleSignout}>Sign out</button>
            </Link>
        </div>
    )
}

export default ProfileDetails