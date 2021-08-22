import React, { useEffect, useState } from "react";
import Quesvg from "../../Components/Footer/Quesvg";
import "./Footer.scss";
import Instagram from "../../Components/Footer/socialmedia/Instagram";
import Behance from "../../Components/Footer/socialmedia/Behance";
import Drible from "../../Components/Footer/socialmedia/Drible";
import Git from "../../Components/Footer/socialmedia/Git";
import Linkedin from "../../Components/Footer/socialmedia/Linkedin";
function Footer() {
  const [scrolls, setScroll] = useState();
  useEffect(() => {
    var footer = document.getElementById("footers");
    footer.addEventListener("scroll", scrollHandler);
  }, []);
  function scrollHandler() {
    var footer = document.getElementById("footers");
    var Yoffset = footer.scrollLeft;
    var widthOfWindow= window.innerWidth
    var width = widthOfWindow + Yoffset
    
    console.log(width);
  }

  return (
    <div id="footers" className="footer">
      <div className="footer-details"></div>
      <div className="footer-div"></div>
      <div className="socialmedia">
        <div className="socialmedia-icons">
          <Instagram />
          <Linkedin />
          <Behance />
          <Drible />
          <Git />
        </div>
      </div>
    </div>
  );
}

export default Footer;
