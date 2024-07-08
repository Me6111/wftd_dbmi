import React, { useState } from 'react';
import './MainMenuButton.css'; // Import the CSS file
import Menu_Icon from './menu_icon.jpg'; // Import the image

const MainMenuButton = () => {

  return (
    <>

      <div className="icon-container" id="menu-icon-container">
        <div className="icon-curtain">
          <button className="button" id="main-menu-button">
              <img src={Menu_Icon} alt="Menu_Icon" />
          </button>
        </div> 
      </div>

    </>
  );
};

export default MainMenuButton;
