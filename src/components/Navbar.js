import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/passions">Passions</Link>
    </div>
  );
};

export default Navbar;
