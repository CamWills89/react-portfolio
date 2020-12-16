import React from "react";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div class="about__content">
        <div class="about__text">
          <p>
            My name is Cameron Wills. I am currently a bootcamp student,
            learning the art of web development. I am from South Africa, living
            in Atlanta, GA, USA. The purpose of this portfolio is to display my
            personal bio to whom ever is interested in me for professional
            reasons. This will hopefully demonstrate who I am as a professional
            web developer. It is meant to demonstrate deployed apps/work that I
            have previously done, my Curriculum Vitae and how to get in contact
            with me on multiple different platforms.
          </p>

          <a
            href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
            target="_blank"
            class="btn"
          >
            My Resume
          </a>
        </div>

        <div class="about__photo-container">
          <img class="about__photo" src="./images/Profile.JPG" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
