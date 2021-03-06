import React from "react";
import SearchBox from "../SearchBox";
import "./Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="input-group col-8">
          <div className="input-group-prepend">
            <div className="search-area col-8">
              <SearchBox handleSearchChange={handleSearchChange} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Pupster
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/about"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//               Discover
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/search"
//               className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//             >
//               Search
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
