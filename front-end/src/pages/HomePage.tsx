import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hold from "../Hold/Hold";
import Initial from "../Initial/Initial";
import LearnMore from "../StressedDads/StressedDads";
import Performance from "../StressedDads/Performance";
import "./HomePage.css";
import Header from "../Header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-title">
        <div>
          <Initial />
        </div>
      </div>
      <Hold />
      <LearnMore />
      <Performance />
      <AboutUs />
    </div>
  );
}

export default HomePage;
