
// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\portal\portal.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import DBMI from '../../apps/dbmi/dbmi';

const Portal = () => {
  return (
    <>
      <BackgroundContainer />

      <div className='main-menu-uber-container'>
        <div className="main-menu-container">
          <div className="main-menu-container-title">
            <h1 className="main-menu-title">WORLD FREIGHT TRANSPORT DEPARTMENT</h1>
          </div>
          <div className="main-menu-container-content">
            <Link className="main-menu-option" to="/dbmi">Databases Management</Link>

          </div>
        </div>
      </div>

      

      <Routes>
        <Route path="/dbmi" element={<DBMI/>} />

      </Routes>
    </>
  );
};

export default Portal;
