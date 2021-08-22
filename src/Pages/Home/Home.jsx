import React from "react";
import HomeBackground from "../../Components/Home/HomeBackground";
import Navbar from "../../Components/Home/Navbar";
import UnderLine from "../../Components/Home/UnderLine";
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
