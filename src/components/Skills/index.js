import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Technologies = () => (
  <div className="container">
    <h1 className="resume-list">Skills</h1>

    <div className="resume-link">
      <a
        href="https://drive.google.com/file/d/1eL7QXO2qeXAxT0zsOQHMCzylRCdyD-Am/view?usp=sharing"
        target="_blank"
        alt="Resume"
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
              <li>JavaScript/jQuery</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap, Handlebars </li>
              <li>Chrome Dev Tools</li>
            </ul>
          </div>
    
          <div className="back">
            <h5 className="header-space">Backend Tech:</h5>
            <ul>
              <li>SQL</li>
              <li>APIs</li>
              <li>REST</li>
              <li>MongoDB, Mongoose</li>
              <li>MySQL, Sequelize</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
      </div>
    </div>
  </div>
);

export default Technologies;
