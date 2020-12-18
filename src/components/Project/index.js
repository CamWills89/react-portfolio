import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    name: "Auto Tracker",
    description:
      "This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on anyweb-enabled device.",
    image: "auto-tracker.PNG",
    technologies:
      "JavaScript, Node.js, HTML/CSS, Handlebars.js, Express & Sequelize, Heroku & AWS S3",
    github: "https://github.com/CamWills89/auto-tracker",
    deployed: "https://team-3-auto-tracker.herokuapp.com/",
  },
  {
    id: 2,
    name: "Citizen Portal",
    description: "A one-stop shop to get all your election information.",
    image: "citizen-portal.PNG",
    technologies: "HTML/CSS, JavaScript & jQuery",
    github: "https://github.com/TeamGreeenLantern/citizen-portal",
    deployed: "https://teamgreeenlantern.github.io/citizen-portal/",
  },
  {
    id: 3,
    name: "Budget Tracker",
    description:
      "Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",
    image: "budget-tracker.PNG",
    technologies:
      "JavaScript,MongoDb, IndexedDb & Service Workers, Node Js, Express js",
    github: "https://github.com/CamWills89/budget-tracker",
    deployed: "https://camerons-budget-tracker.herokuapp.com/",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "A weather dashboard that shows current weather and five-day weather forecast for any city.",
    image: "weather-dashboard.PNG",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/CamWills89/weather-dashboard",
    deployed: "https://camwills89.github.io/weather-dashboard",
  },
];

function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="card col-9">
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          <img
            alt={props.name}
            src={require(`../../assets/projects/${props.image}`)}
            className="card-img"
          />
        </a>

        <h1 className="project-card">{props.name}</h1>
        <div>
          <p id="project-description"className="project-card">{props.description}</p>
        </div>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <img
            alt="Github"
            className="github"
            src={require("../../assets/icons/github.svg")}
          />
        </a>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList] = useState(projects);

  const renderProject = (project) => {
    return (
      <ProjectCard
        name={project.name}
        description={project.description}
        image={project.image}
        id={project.id}
        github={project.github}
        deployed={project.deployed}
        key={project.id}
      />
    );
  };
  //

  return (
    <Wrapper>
      <h1 className="project-list" id="header">
        Project List
      </h1>

      {projectsList.map((project) => renderProject(project))}
    </Wrapper>
  );
}

export default Projects;
