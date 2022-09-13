import React from 'react';

const Home = () => {
    return (
        <div className='Main'>
            <img src='waimea-pic.png' alt='Waimea' className='Picture'/>
            <div className='Info'>
                <p className='Description'>
                    I am currently a graduate student in the Department of Applied Mathematics at the University of Washington in Seattle, WA.
                    My interests include dynamicals systems, numerical analysis, and data science.
                </p>
                <div className='Contacts'>
                    <a href='mailto:tshak@uw.edu'>
                        <img src='email-icon.png' alt='Email' className='Email'/>
                    </a>
                    <a href='https://github.com/TylerShakibai'>
                        <img src='github-icon.png' alt='GitHub' className='GitHub'/>
                    </a>
                    <a href='https://github.com/TylerShakibai'>
                        <img src='linkedin-icon.png' alt='LinkedIn' className='LinkedIn'/>
                    </a>
                </div>
            </div>
        </div>
    );
  };

export default Home;