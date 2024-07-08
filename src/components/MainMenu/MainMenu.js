import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <>
      <div className="MainMenu">
        <div className="main-menu-options">
          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Home</div>
            </div>
          </div>

          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Login</div>
            </div>
          </div>

          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Deliverium</div>
            </div>
          </div>

          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Databases Management</div>
            </div>
          </div>

          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Help</div>
            </div>
          </div>

          <div className="main-menu-option-container">
            <div className="pointer"></div>
            <div className="main-menu-option">
              <div className="sign">Founders</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;