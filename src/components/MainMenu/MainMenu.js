import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = ({ isVisible, onClose }) => {
  const handleCurtainClick = () => {
    // Call the onClose function to handle closing the menu
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className='main-menu-uber-container'>
        <div className='main-menu-curtain' onClick={handleCurtainClick}></div>
        <div className="main-menu-container">
          <div className="main-menu-container-title">
            <h1 className="main-menu-title">WORLD FREIGHT TRANSPORT DEPARTMENT</h1>
          </div>
          <div className="main-menu-container-content">
            <Link className="main-menu-option" to="/Wftd_dbmi">Databases Management Interface</Link>

          </div>
        </div>
      </div>
      )}
    </>
  );
};

MainMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MainMenu;
