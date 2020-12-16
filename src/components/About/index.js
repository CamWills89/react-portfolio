import React from "react";
import profileImage from "../../assets/profile/Profile.JPG";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div>
        <div>
          <p>
            My name is Cameron Wills. I am a Fullstack web developer. I am from
            South Africa, living in Atlanta, GA, USA. The purpose of this
            portfolio is to display my personal bio to whom ever is interested
            in me for professional reasons. This will hopefully demonstrate who
            I am as a professional web developer. This will demonstrate deployed
            apps/work that I have previously done, my Curriculum Vitae and how
            to get in contact with me on multiple different platforms.
          </p>
          <a
            href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
            target="_blank"
            class="btn"
          >
            My Resume
          </a>
        </div>
        <div>
          <img src={profileImage} className="my-2" alt="profile image" />
        </div>
      </div>
    </section>
  );
}

export default About;
