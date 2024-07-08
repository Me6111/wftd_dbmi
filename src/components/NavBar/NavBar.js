import React, { useState } from 'react';
import './NavBar.css'; // Import the CSS file
import logo from './logo.jpg'; // Adjust the path if necessary
import MainMenuButton from '../MainMenuButton/MainMenuButton'; // Import the MainMenu component


const NavBar = () => {

  return (
    <>
      <div className="nav-bar">

        <div className="icon-container" id="logo-icon-container">
          <img src={logo} alt="Logo" />
        </div>

        <MainMenuButton />

      </div>
    </>
  );
};

export default NavBar;
