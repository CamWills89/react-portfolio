// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Nav(props) {
//   const tabs = ["About", "Portfolio", "Skills", "Contact"];
//   return (
//     <ul className="nav">
      
//       {tabs.map((tab) => (
//         <li className="" key={tab}>
//           <a
//             href={"#" + tab.toLowerCase()}
//             onClick={() => props.handlePageChange(tab)}
//             className={
//               props.currentPage === tab ? "nav-link active" : "nav-link"
//             }
//           >
//             {tab}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Nav;

import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

`

const Navbar = (props) => {
  console.log("Navbar Props", props);
  return (
    <Nav>
      <div></div>
      <Burger handlePageChange={props.handlePageChange} />
    </Nav>
  );
};

export default Navbar