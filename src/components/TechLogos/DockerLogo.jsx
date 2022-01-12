import './techlogos.css';
import React from 'react';

const dockerLogoURL =
  'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png';

const DockerLogo = () => {
  return (
    <img className='tech-logo-img' src={dockerLogoURL} alt='docker logo' />
  );
};

export default DockerLogo;
