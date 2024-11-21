import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Event from "./components/Event/Event";
import Profile from "./components/Profile/Profile";
import Deal from "./components/Deal/Deal";
import * as userService from "./services/userService";

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [userData, setUserData] = useState()

  useEffect(() => {
    const getUserData = async (id) => {
      try {
        const userData = await userService.getUserData(id)
        if(userData.error) {
          throw new Error(userData.error)
        }
        setUserData(userData)
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    }
    user ? getUserData(user._id) : setUserData({})
  }, [])

  return (
    <>
      <NavBar user={user}/>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signin"
          element={<LoginForm user={user} setUser={setUser}/>}
        />
        <Route
          path="/signup"
          element={<SignupForm setUser={setUser}/>}
        />
        <Route
          path="/events/*"
          element={<Event />}
        />
        <Route
          path="/deals/*"
          element={<Deal />}
        />
        <Route
          path="/account"
          element={<Profile userData={userData} setUser={setUser}/>}
        />
      </Routes>
    </>
  );
}

export default App;
