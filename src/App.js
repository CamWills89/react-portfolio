import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Project";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
