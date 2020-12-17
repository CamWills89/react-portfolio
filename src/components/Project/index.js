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

// function Projects(props) {
//   console.log(projects);

//   return (
//     <div>
//       {projects.map((project) => {
//         return (
//           <div key={project.name}>
//             <img
//               src={require(`../../assets/projects/${project.image}`)}
//               alt={project.name}
//             />
//             <div>
//               <h4>{project.name}</h4>
//               <p>{project.description}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function ProjectCard(props) {
  return (
    <div className="card-container">
        <div className="card col-6">
          <img
            alt={props.name}
            src={require(`../../assets/projects/${props.image}`)}
            className="card-img"
          />
          <h3 className="project-name">{props.name}</h3>
          <p>{props.description}</p>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <div>
            <a href={props.deployedapp} target="_blank" rel="noopener noreferrer">
              Deployed Application
            </a>
          </div>
        </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="">{props.children}</div>;
}

function Projects() {
  // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

  const [projectsList, setProjectsList] = useState(projects);

  const renderProject = (project) => {
    return (
      <ProjectCard
        name={project.name}
        image={project.image}
        id={project.id}
        github={project.github}
        deployedapp={project.deployedapp}
        key={project.id}
      />
    );
  };
  //

  return (
    <Wrapper>
      <h1 className="project-list">Project List</h1>

      {projectsList.map((project) => renderProject(project))}
    </Wrapper>
  );
}

export default Projects;