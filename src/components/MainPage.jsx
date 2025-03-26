import React from "react";
import "../App.css";
const MainPage = () => {
  return (
    <div className="main-page">
      <nav>
        <div className="left-nav">
          <span>&lt;Prashant Singh /&gt;</span>
        </div>
        <div className="middle-nav">
          <div className="switch">
            <img src="/sun.svg" alt="_sun" />
          </div>
        </div>
        <div className="right-nav">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="left-main">
          <h1>
            I'm
            <br />a<br />
            Web
            <br />
            <span style={{ fontWeight: 500,color:"skyblue" }}>Developer</span>&lt;/&gt;
          </h1>
          <p>Good Morning :)</p>
          <p>
            I'm Prashant,a passionate web developer with a strong foundation in
            Modern Web Technologies, Including
            JavaScript,React.js,Express.js,Node.js.
          </p>
          <div className="contact-box">
            <div className="social-icons">
              <img src="/linkedin.svg" alt="_linkedin" />
            </div>
            <div className="social-icons">
              <img src="/github.svg" alt="_github" />
            </div>
            <div className="social-icons">
              <img src="/discord.svg" alt="_discord" />
            </div>
          </div>
           <div className="contact-btns">
            <button>Hire Me</button>
            <button>Resume</button>
           </div>
        </div>
        <div className="right-main">
           <div id="profile"> 
            <img src="/Profile-picture.webp" alt="" srcset="" />
            </div>
         </div>
      </main>
       <hr />
    </div>
  );
};

export default MainPage;
