import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    name: "Living Real",
    description:
      "A Realty Management Tool for a Private Owner. This is a 3-part functional site to advertise their properties, manage tenants and properties",
    image: "living-real.PNG",
    technologies: "React, MongoDB, Express, Node, GraphQL, Redux",
    github: "https://github.com/P3T2-Realty-Rogues/living-real",
    deployed: "https://living-real.herokuapp.com/",
  },
  {
    id: 2,
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
    id: 3,
    name: "Citizen Portal",
    description: "A one-stop shop to get all your election information.",
    image: "citizen-portal.PNG",
    technologies: "HTML/CSS, JavaScript & jQuery",
    github: "https://github.com/TeamGreeenLantern/citizen-portal",
    deployed: "https://teamgreeenlantern.github.io/citizen-portal/",
  },
  {
    id: 4,
    name: "Shop-Shop",
    description:
      "This is an e-commerce application that allows users to shop for various items, add these products to the shopping cart, manage the shopping cart by increasing and decreasing quantities, check out their purchases and see their order history. This application is built using Node.js, GraphQL, Apollo Server, MongoDB and it is using React for the front end and Redux for global state management",
    image: "shop-shop.PNG",
    technologies: "MERN Stack, GraphQL, JavaScript, Html/CSS",
    github: "https://github.com/CamWills89/redux-store",
    deployed: "https://cameron-shop-shop.herokuapp.com/",
  },
  {
    id: 5,
    name: "Book Search",
    description:
      "The Book search engine uses the MERN stack and with a React front end, MongoDB database, and Node js & Express js server. It's set up to allow users to save book searches to their profile and view the books and their details. The application is built using Google Books API so that users can click a link that takes them to google books. The search engine is built with GraphQL API and Apollo Server.",
    image: "book-search.PNG",
    technologies: "HTML, CSS, JavaScript, MERN Stack",
    github: "https://github.com/CamWills89/book-search-engine",
    deployed: "https://cameron-book-search-engine.herokuapp.com/",
  },
  {
    id: 6,
    name: "Budget Tracker",
    description:
      "Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.",
    image: "budget-tracker.PNG",
    technologies: "HTML, CSS, JavaScript, MongoDb, Mongoose",
    github: "https://github.com/CamWills89/budget-tracker",
    deployed: "https://camerons-budget-tracker.herokuapp.com/",
  },
];

function ProjectCard(props) {
  console.log(props);
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
