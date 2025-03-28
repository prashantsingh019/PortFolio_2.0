import React from "react";
import "../App.css";
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
import Buttons from "./Buttons";


const MainPage = () => {
  return (
    <div className="main-page">
      <nav id="navbar">
        <div className="left-nav">
          <span>&lt;Prashant Singh /&gt;</span>
        </div>
        <div className="middle-nav">
          <div className="switch">
            <img src="/sun.svg" alt="_sun" />
          </div>
        </div>
        <div className="right-nav">
          <span>
            <img
              src="hamburger.svg"
              alt=""
              
              width={"32px"}
              className="hamicon"
            />
          </span>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main id="main-container">
        <div className="left-main">
          <h1>
            I'm
            <br />a<br />
            Web
            <br />
            <span style={{ fontWeight: 500, color: "skyblue" }}>Developer</span>
            &lt;/&gt;
          </h1>
          <p>Good Morning :)</p>
          <p id="main-about">
            I'm Prashant,a passionate web developer with a strong foundation in
            Modern Web Technologies, Including
            JavaScript,React.js,Express.js,Node.js.
          </p>
          <div className="contact-btns">
            <button id="hire-btn">Hire Me</button>
            <button id="resume-btn">
              <a href="/Docs/PrashantSingh_InternshalaResume.pdf"> Resume</a>
            </button>
          </div>
          <div className="contact-box">
            <div className="social-icons">
              <Buttons url={"https://www.linkedin.com/in/prashant-singh-b843b9210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}  icon={faLinkedin}/>
            </div>
           
            <div className="social-icons">
              <Buttons url={"https://github.com/prashantsingh019"} icon={faGithub}/>
            </div>
          </div>
        </div>
        <div className="right-main">
          <div id="profile">
            <img src="/Profile-picture.webp" alt=""/>
          </div>
        </div>
      </main>
      <hr />
    </div>
  );
};

export default MainPage;
