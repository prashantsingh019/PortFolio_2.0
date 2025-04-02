import React from "react";

const AboutPage = () => {
  return (
    <section className="about-page flex justify-between item-center bg-red-200 w-screen">
      <div className="heading text-7xl font-bold text-red-500">
        <div>About</div>
        <div>Me</div>
      </div>
      <div className="intro w-[80%]">
        Hi, I'm Prashant, a passionate Frontend Developer specializing in React
        and the MERN stack. With a strong foundation in JavaScript, HTML, CSS,
        Redux, and REST APIs, I love crafting interactive, responsive, and
        visually appealing web applications. Currently, I'm sharpening my skills
        to become a top-tier Frontend Developer while also exploring backend
        technologies like MySQL to expand my expertise.
      </div>
    </section>
  );
};

export default AboutPage;
