import { React, useState } from "react";
import * as userService from "../../services/userService";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = (props) => {
  const { userData, setUser, setUserData, handleSignout } = props;
  const userId = userData._id;
  const [isAIVisible, setIsAIVisible] = useState(false);
  const [isAIFormVisible, setIsAIFormVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: `${userData.username}`,
    email: `${userData.email}`,
    phoneNumber: `${userData.phoneNumber}`,
    address: `${userData.address}`,
    type: `${userData.type}`,
  });

  const handleAIClick = () => {
    isAIVisible ? setIsAIVisible(false) : setIsAIVisible(true);
    setIsAIFormVisible(false);
    setIsDeleteVisible(false);
  };

  const formVisible = () => {
    isAIFormVisible ? setIsAIFormVisible(false) : setIsAIFormVisible(true);
    setIsAIVisible(false);
    setIsDeleteVisible(false);
  };

  const handleDClick = () => {
    isDeleteVisible ? setIsDeleteVisible(false) : setIsDeleteVisible(true);
    setIsAIFormVisible(false);
    setIsAIVisible(false);
  };

  const formHidden = () => {
    setIsAIFormVisible(false);
    setIsAIVisible(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await userService.update(userId, formData);
      setUser(newUserResponse.user);
      setIsAIFormVisible(false);
      setIsAIVisible(true);
      alert("User information updated!");
    } catch (err) {
      alert("Sorry, that didn't work. Try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const deleteUser = await userService.deleteUser(id);
      deleteUser(userId);
      handleSignout();
      alert("Account deleted.");
      navigate("/");
    } catch (error) {
      alert("Sorry, that didn't work. Try again.");
    }
  };

  return (
    <div>
      <h2>Welcome, {userData.username}!</h2>
      <h3 onClick={handleAIClick}>Account information</h3>
      {isAIVisible ? (
        <div className="accountInfo">
          <ul>
            <li>Username: {userData.username}</li>
            <li>Email: {userData.email}</li>
            <li>Address: {userData.address}</li>
            <li>Phone Number: {userData.phoneNumber}</li>
            <li>Type: {userData.type}</li>
          </ul>
          <button onClick={formVisible}>Edit Profile</button>
        </div>
      ) : (
        <></>
      )}
      {isAIFormVisible ? (
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue={userData.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address:</label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={userData.email}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={userData.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={userData.address}
            placeholder="Enter your address"
            onChange={handleChange}
          />
          <label htmlFor="type">Account Type:</label>
          <select
            name="type"
            id="type"
            defaultValue={userData.type}
            onChange={handleChange}
          >
            <option value="Individual">Individual</option>
            <option value="Vendor">Vendor</option>
          </select>
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Update Account
          </button>
          <button onClick={formHidden}>Cancel</button>
        </form>
      ) : (
        <></>
      )}
      <h3 onClick={handleDClick}>Delete Account</h3>
      {isDeleteVisible ? (
        <div>
          <p>
            Are you sure you want to delete your account? This can't be undone.
          </p>
          <button onClick={handleDClick}>No, don't delete</button>
          <button onClick={handleDelete}>Yes, please delete</button>
        </div>
      ) : (
        <></>
      )}
      <Link to="/">
        <button onClick={handleSignout}>Sign out</button>
      </Link>
    </div>
  );
};

export default Profile;
