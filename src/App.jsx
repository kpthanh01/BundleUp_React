import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Event from "./components/Event/Event";
import ProfileDetails from "./components/Profile/profileDetails";
import DealList from "./components/Deal/DealList";
import * as dealService from "./services/dealService";
import * as userService from "./services/userService";

function App() {
  const [user, setUser] = useState(userService.getUser);
  const [dealList, setDealList] = useState([]);

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
          path="/deals"
          element={<DealList dealList={dealList} />}
        />
        <Route
          path="/account"
          element={<ProfileDetails setUser={setUser}/>}
        />
      </Routes>
    </>
  );
}

export default App;
