import React from "react";
import profileImage from "../../assets/profile/Profile.JPG";

function About() {
  return (
    // <section className="container">
    //   <div className="row">
    //     <h2 id="about">About Me</h2>
    //     <div className="about-content container">
    //       <div>
    //         <p>
    //           My name is Cameron Wills. I am a Fullstack web developer. I am
    //           from South Africa, living in Atlanta, GA, USA. The portfolio
    //           displays my personal bio to whom ever is interested in me for
    //           professional reasons. This will hopefully demonstrate who I am as
    //           a professional web developer. It demonstrates deployed apps/work
    //           that I have done, my Curriculum Vitae and how to get in contact
    //           with me on multiple different platforms.
    //         </p>
    //         <a
    //           href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
    //           target="_blank"
    //           id="resume"
    //         >
    //           My Resume
    //         </a>
    //       </div>
    //       <div className="profile-image">
    //         <img src={profileImage} className="my-2" alt="profile image" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="">
      <h1 id="about">Cameron Wills</h1>

      <div className="row">
        <div className="col-4 ip-picture">
          <img src={profileImage} className="ip-picture" alt="cameron-wills" />
        </div>

        <div className="col-7 ip-desc">
          <h2>About me</h2>
          <p>
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
