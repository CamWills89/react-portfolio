import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Technologies = () => (
  <div>
    <h1 className="project-list" id="header">
      Skills
    </h1>

    <div className="container">
      <div className="resume-link">
        <a
          href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
          target="_blank"
          alt="Resume"
          id="resume-text"
        >
          View my Resume
        </a>
      </div>

      <div className="resume-main flex-row">
        <div>
          <p>
            Full Stack Web Development program focusing on Front-end and
            Server-side and Database Architectures development.
          </p>
        </div>

        <div className="row">
          <div className="front">
            <h5 className="header-space">Frontend Tech:</h5>
            <ul>
              <li id="skill-list">JavaScript/jQuery</li>
              <li id="skill-list">HTML</li>
              <li id="skill-list">CSS</li>
              <li id="skill-list">Responsive Design</li>
              <li id="skill-list">React</li>
              <li id="skill-list">Bootstrap, Handlebars </li>
              <li id="skill-list">Chrome Dev Tools</li>
            </ul>
          </div>

          <div className="back">
            <h5 className="header-space">Backend Tech:</h5>
            <ul id="skill-list">
              <li id="skill-list">SQL</li>
              <li id="skill-list">APIs</li>
              <li id="skill-list">REST</li>
              <li id="skill-list">MongoDB, Mongoose</li>
              <li id="skill-list">MySQL, Sequelize</li>
              <li id="skill-list">Express</li>
              <li id="skill-list">Node</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Technologies;
