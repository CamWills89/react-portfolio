import React from "react";
import profileImage from "../../assets/profile/Profile.JPG";

function About() {
  return (
    <section className="">
      <h1 id="header">Cameron Wills</h1>

      <div className="row">
        <div className="col-4 ip-picture">
          <img src={profileImage} className="ip-picture" alt="cameron-wills" />
        </div>

        <div className="col-7 ip-desc">
          <h2 id="about">About me</h2>
          <p id="about-me">
            My name is Cameron Wills. I am a Fullstack web developer. I am from
            South Africa, living in Atlanta, GA, USA. The portfolio displays my
            personal bio to whom ever is interested in me for professional
            reasons. This will hopefully demonstrate who I am as a professional
            web developer. It demonstrates deployed apps/work that I have done,
            my Curriculum Vitae and how to get in contact with me on multiple
            different platforms.
          </p>
          <a
            href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
            target="_blank"
            id="resume"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
