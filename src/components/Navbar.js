import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" className="running">Nhat Nguyen</Link>
        <Link to="/projects" className="page">projects</Link>
        <Link to="/list100" className="page">100</Link>
        <form action="https://drive.google.com/file/d/1QXUVBqcVXJDH-s9MZ8lP5Z2C-97Tpmzv/view?usp=sharing" method="get" target="_blank">
         <button type="submit" className="cv">resume</button>
      </form>

      </div>
    </div>
    
  );
}

export default Navbar;
