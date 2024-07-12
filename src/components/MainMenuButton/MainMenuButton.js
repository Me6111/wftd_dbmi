import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import Menu_Icon from './menu_icon.jpg';
import MainMenu from '../MainMenu/MainMenu';
import { clickMenuCurtain } from './click_mainMenuCurtain';

const MainMenuButton = () => {
  const [isMainMenuVisible, setIsMainMenuVisible] = useState(false);

  const CreateMainMenu = () => {
    setIsMainMenuVisible(true);
  };

  useEffect(() => {
    if (isMainMenuVisible) {
      const targetElement = document.getElementById('screen-content-container');
      let mainMenuWrapper = document.getElementById('MainMenu');
      let mainMenuCurtain = document.getElementById('mainMenuCurtain');

      if (!mainMenuWrapper || !mainMenuCurtain) {
        // Create the elements if they don't exist
        mainMenuWrapper = document.createElement('div');
        mainMenuCurtain = document.createElement('div');
        mainMenuCurtain.id = 'mainMenuCurtain';
        targetElement.appendChild(mainMenuCurtain);

        mainMenuWrapper.id = 'MainMenu'; 
        targetElement.appendChild(mainMenuWrapper);
        mainMenuWrapper.style.left = '-330px';
        mainMenuWrapper.style.transition = 'left 0.5s ease-in-out';

        ReactDOM.render(<MainMenu />, mainMenuWrapper);

        mainMenuCurtain.addEventListener('click', () => clickMenuCurtain(() => {
          setIsMainMenuVisible(false); // Reset state after curtain is clicked and elements are removed
        }));

        setTimeout(() => {
          mainMenuWrapper.style.left = '0px';
        }, 0);
      }
    }
  }, [isMainMenuVisible]);

  return (
    <>
      <div className="icon-container">
        <button className="button" id="main-menu-button" onClick={CreateMainMenu}>
          <img src={Menu_Icon} alt="Menu Icon" />
        </button>
      </div>
    </>
  );
};

export default MainMenuButton;