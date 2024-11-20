import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Event from "./components/Event/Event";
import DealList from "./components/Deal/DealList";
import * as dealService from "./services/dealService";
import * as userService from "./services/userService";

function App() {
  const [user, setUser] = useState(null);
  const [dealList, setDealList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await userService.index();
        if (users.error) {
          throw new Error(users.error);
        }
        setEventList(events);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  });

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
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signin"
          element={<LoginForm user={user} />}
        />
        <Route
          path="/signup"
          element={<SignupForm />}
        />
        <Route
          path="/events/*"
          element={<Event />}
        />
        <Route
          path="/deals"
          element={<DealList dealList={dealList} />}
        />
      </Routes>
    </>
  );
}

export default App;
