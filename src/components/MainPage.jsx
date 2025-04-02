import React from "react";
import "../App.css";

import Buttons from "./Buttons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
            I'm Prashant, a passionate web developer with a strong foundation in
            modern web technologies, including JavaScript, React.js, Express.js,
            and Node.js.
          </p>

          <div className="contact-btns">
            <button className="btn-sm" id="talk-btn">
              Let's Talk
            </button>

            <button className="btn-sm">
              <a href="/Docs/PrashantSingh_InternshalaResume.pdf">Resume</a>
            </button>
          </div>
          <div className="contact-box">
            <Buttons
              url={
                "https://www.linkedin.com/in/prashant-singh-b843b9210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              icon={faLinkedin}
            />

            <Buttons
              url={"https://github.com/prashantsingh019"}
              icon={faGithub}
            />

            <Buttons
              url={"https://github.com/prashantsingh019"}
              icon={faEnvelope}
            />
          </div>
        </div>
        <div className="right-main">
          <div id="profile">
            <img src="/Profile-picture.webp" alt="" />
          </div>
        </div>
      </main>
      <hr />
    </div>
  );
};

export default MainPage;

