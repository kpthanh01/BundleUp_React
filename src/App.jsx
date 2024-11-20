import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Event from "./components/Event/Event";
import Deal from "./components/Deal/Deal";
import * as userService from "./services/userService";

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await userService.index();
        if (users.error) {
          throw new Error(users.error);
        }
        setUser(users);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  });

  

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
          path="/deals/*"
          element={<Deal />}
          />
        

 
      </Routes>
    </>
  );
};

export default App;
