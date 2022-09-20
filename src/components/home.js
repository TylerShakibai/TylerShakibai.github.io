import React from 'react';

const Home = () => {
    return (
        <div className='Main'>
            <figure className='Picture'>
                <img src='waimea-pic.png' alt='Waimea' className='Image'/>
                <figcaption className='Caption'>Hiking Waimea Canyon, HI</figcaption>
            </figure>
            <div className='Info'>
                <p className='Description'>
                    I am currently a graduate student in the <a href='https://amath.washington.edu/' className='Links'>Department of Applied Mathematics</a> at the University of Washington in Seattle, WA.
                    I received my bachelor's degree in applied mathematics and computer science from the <a href='https://www.math.umass.edu/' className='Links'>University of Massachusetts Amherst</a>.
                    My interests include dynamical systems, numerical analysis, and data science.
                </p>
                <div className='Contacts'>
                    <a href='mailto:tshak@uw.edu'>
                        <img src='email-icon.png' alt='Email' className='Email'/>
                    </a>
                    <a href='https://github.com/TylerShakibai'>
                        <img src='github-icon.png' alt='GitHub' className='GitHub'/>
                    </a>
                    <a href='https://www.linkedin.com/in/tylershakibai/'>
                        <img src='linkedin-icon.png' alt='LinkedIn' className='LinkedIn'/>
                    </a>
                </div>
            </div>
        </div>
    );
  };

export default Home;