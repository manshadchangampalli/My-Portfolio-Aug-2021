import React, { useEffect, useState } from "react";
import Quesvg from "../../Components/Footer/Quesvg";
import "./Footer.scss";
import Instagram from "../../Components/Footer/socialmedia/Instagram"
import Behance from "../../Components/Footer/socialmedia/Behance"
import Drible from "../../Components/Footer/socialmedia/Drible"
import Git from "../../Components/Footer/socialmedia/Git"
import Linkedin from "../../Components/Footer/socialmedia/Linkedin"
function Footer() {
  const [scrolls, setScroll] = useState();
 
  return (
    <div className="footer">
      <div  className="footer-div">
        
      </div>
      <div className="socialmedia">
          <div className="socialmedia-icons">
              <Instagram/>
              <Linkedin/>
              <Behance/>
              <Drible/>
              <Git/>
              <Git/>
              
          </div>
      </div>
    </div>
  );
}

export default Footer;
