import React from "react";
import Project from "../../Components/Projects/Project";
import "./Projects.scss";

function Projects() {
  return (
    <div className="Projects">
      {/* reused component */}

      <Project
        p="Its an Reactjs project"
        title="CURTAIN HOUSE"
        class="curtain"
        view="https://curtain-house.web.app/"
        sc="https://github.com/manshadchangampalli/CURTAIN-HOUSE-OFFICIAL-WEBSITE"
        clr1="#fff"
        clr2="#000"
        clr3="#283940"
        clr4="#BEE9FC"
        //sc = source code
      />
      <Project
        title="FOOD RECIPIE"
        p="its an simple design"
        design
        class="food"
        clr1="#fff"
        clr2="#000"
        clr3="#10516A"
        clr4="#002939"
      />
      <Project
        p="Its an Reactjs project"
        title="NAVIGATE"
        class="navigate"
        clr1="#fff"
        clr2="#323713"
        clr3="#000"
        clr4="#616A2D"
        view="https://www.navigatetechindia.com/"
        sc=""
      />
      <Project
        p="Its an HTML5 project"
        title="PORTFOLIO"
        class="portfolio"
        clr1="#fff"
        clr2="#000"
        clr3="#f4af1b"
        clr4="#5c5c5c5d"
        view="https://manshadchangampalli.github.io/-manshadchangampalli-portfolio/"
        sc="https://github.com/manshadchangampalli/-manshadchangampalli-portfolio"
      />
    </div>
  );
}

export default Projects;
