import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Event from "./components/Event/Event";
import ProfileDetails from "./components/Profile/profileDetails";
import Deal from "./components/Deal/Deal";
import * as userService from "./services/userService";

function App() {
<<<<<<< HEAD
  const [user, setUser] = useState(userService.getUser());
  const [userData, setUserData] = useState()
  const [dealList, setDealList] = useState([]);

  useEffect(() => {
    const getUserData = async (id) => {
      try {
        const userData = await userService.getUserData(id)
        if(userData.error) {
          throw new Error(userData.error)
        }
        setUserData(userData)
        console.log(userData)
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    }
    user ? getUserData(user._id) : setUserData({})
  }, [])

  useEffect(() => {
    const getDeals = async () => {
      try {
        const deals = await dealService.index();
        if (deals.error) {
          throw new Error(deals.error);
        }
        setDealList(deals);
      } catch (error) {
        console.log("Error fetching deals:", error);
      }
    };
    getDeals();
  }, []);
=======
  const [user, setUser] = useState(userService.getUser);
>>>>>>> cf18d3a915a4e5b71baee0b39b685546e3a8f049

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
          element={<ProfileDetails user={user} userData={userData} setUser={setUser}/>}
        />

      </Routes>
    </>
  );
};

export default App;
