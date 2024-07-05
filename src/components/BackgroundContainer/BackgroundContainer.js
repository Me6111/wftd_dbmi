// BackgroundContainer.js

import React from 'react';
import wftd_portal from './wftd_portal.jpg';

import './BackgroundContainer.css'; // Import the CSS file

const BackgroundContainer = () => {
  return (
    <img
        className="illustration-container"
        src={wftd_portal}
        alt="Illustration"
    />
  );
};

export default BackgroundContainer;
