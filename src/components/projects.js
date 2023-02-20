import React from 'react';

const Projects = () => {
    return (
        <div className='Project-List'>
            <article>
                <div className='Project'>
                    <div>
                        <a href='https://github.com/TylerShakibai/TylerShakibai.github.io' className='Links'>This Website</a>
                        <p>My personal website. Built using React, JavaScript, HTML, and CSS.</p>
                    </div>
                    <img src='favicon.ico' alt='Website icon' className='Project-Icon'/>
                </div>
            </article>
            <article>
                <div className='Project'>
                    <div>
                        <a href='https://github.com/TylerShakibai/Solar-Spectra-Model' className='Links'>Solar Spectra Model</a>
                        <p>Convolutional Neural Network for Solar Spectra Regression.</p>
                    </div>
                    <img src='solar-spectra.png' alt='Solar spectra icon' className='Project-Icon'/>
                </div>
            </article>
        </div>
    );
};

export default Projects;