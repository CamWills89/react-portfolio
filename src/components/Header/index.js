import React, { useState } from "react";
import About from "../About";
import Nav from "../Nav";
import Projects from "../Project";
import Contact from "../Contact";
import Technologies from "../Skills";

function Portfolio() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "About":
        return <About />;

      case "Portfolio":
        return <Projects />;

      case "Contact":
        return <Contact></Contact>;

      case "Skills":
        return <Technologies></Technologies>;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;
