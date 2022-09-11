import React from 'react';
import { Link } from 'react-router-dom';
  
const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="Home">Home</Link>
      <Link to="/projects" className="Projects">Projects</Link>
      <Link to="/cv" className="CV">CV</Link>
    </nav>
  );
};

export default Navigation;