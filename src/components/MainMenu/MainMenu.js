import React from 'react';
import './MainMenu.css';

import LogoContainer from '../LogoContainer/LogoContainer';

const MainMenu = () => {
  return (
    <>

      

      <div className="MainMenu-logo">
        <LogoContainer />
      </div>

      <div className="main-menu-options">
        <div className="main-menu-option">
          <div className="sign">Home</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Login</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Deliverium</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Data Management</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Help</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Founders</div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;