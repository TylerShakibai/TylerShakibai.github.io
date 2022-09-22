import React from 'react';
import { Link } from 'react-router-dom';
  
const Navigation = () => {
  return (
    <nav>
      <Link to='/' className='Home'>Home</Link>
      <Link to='/projects' className='Projects'>Projects</Link>
      <a href='/TylerShakibai_CV.pdf' target='_blank' className='CV'>CV</a>
    </nav>
  );
};

export default Navigation;