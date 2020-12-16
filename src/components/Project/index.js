import React, { useState } from "react";

function Portfolio() {
  const projects = [
    {
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
      name: "Citizen Portal",
      description: "A one-stop shop to get all your election information.",
      image: "citizen-portal.PNG",
      technologies: "HTML/CSS, JavaScript & jQuery",
      github: "https://github.com/TeamGreeenLantern/citizen-portal",
      deployed: "https://teamgreeenlantern.github.io/citizen-portal/",
    },
    {
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
      name: "Weather Dashboard",
      description:
        "A weather dashboard that shows current weather and five-day weather forecast for any city.",
      image: "weather-dashboard.PNG",
      technologies: "HTML, CSS, JavaScript",
      github: "https://github.com/CamWills89/weather-dashboard",
      deployed: "https://camwills89.github.io/weather-dashboard",
    },
  ];

  return (
    <div className="flex-row container">
      
    </div>
  );
}

export default Portfolio;
