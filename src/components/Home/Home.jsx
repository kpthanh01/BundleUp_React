import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to BundleUp!</h1>
      <p className="home-subheader">
        Discover exclusive deals on the best activities, restaurants, and
        experiences near you. Save big and explore more with BundleUp!
      </p>
      <div className="home-buttons">
        <a href="/signin" className="home-button">
          Sign In
        </a>
        <a href="/signup" className="home-button home-button-secondary">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;