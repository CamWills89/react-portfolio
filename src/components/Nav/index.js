import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Skills", "Contact"];
  return (
    <header className="flex-row justify-content-space-between">
      <h1 className="my-5 px-1">Cameron Wills</h1>
      <nav>
        <ul className="flex-row justify-content-space-between px-1">
          {tabs.map((tab) => (
            <li className="mx-2" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                className="mx-2"
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab && " navActive"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
