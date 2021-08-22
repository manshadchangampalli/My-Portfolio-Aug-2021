import React from "react";
import HomeBackground from "../../Components/HomeBackground";
import Navbar from "../../Components/Navbar";
import UnderLine from "../../Components/UnderLine";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HomeBackground />
      <div className="title">
        <div>
          <h1>IAM MANSHAD CHANGAMPALLI</h1>
          <UnderLine />
        </div>
      </div>
    </div>
  );
}

export default Home;
