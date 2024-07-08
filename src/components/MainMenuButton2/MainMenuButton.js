import React, { useState } from 'react';
import MainMenu from '../MainMenu/MainMenu'; // Import the MainMenu component
import './MainMenuButton.css'; // Import the CSS file
import wftd_sign2 from './wftd_sign2.jpg'; // Import the image

const MainMenuButton = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State to track menu visibility

  const handleMainMenuButtonClick = () => {
    setMenuVisible(true); // Set menu visibility to true when the button is clicked
  };

  const handleMainMenuClose = () => {
    setMenuVisible(false); // Set menu visibility to false when the curtain is clicked
  };

  return (
    <>
      <button className="main-menu-button" onClick={handleMainMenuButtonClick}>
        <img src={wftd_sign2} alt="wftd_sign" />
      </button>
      <MainMenu isVisible={menuVisible} onClose={handleMainMenuClose} /> {/* Pass visibility state and close function */}
    </>
  );
};

export default MainMenuButton;
