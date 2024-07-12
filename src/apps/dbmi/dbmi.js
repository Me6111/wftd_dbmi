





import React, { useState } from 'react';

import './dbmi.css';

import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import NavBar from '../../components/NavBar/NavBar';
import MainMenu from '../../components/MainMenu/MainMenu';

import Table from './table/Table'; 
import { data, columns } from './table/Table_data'; 

const DBMI = () => {
  // Transforming the data for the Table component
  const initialHeaders = columns.map(column => column.Header); 
  const rows = data.map(item => Object.values(item)); 

  // State to manage headers
  const [headers, setHeaders] = useState(initialHeaders);

  // Function to handle header updates
  const updateHeader = (newHeaders) => {
    setHeaders(newHeaders);
  };

  return (
    <>
      <BackgroundContainer />


      <div id="screen-content-container">
        <NavBar />






        <div className="AppContainer">


          <div className="Locations-app-container">
            <div className="Locations-app-container-content">
              <Table headers={headers} rows={rows} onUpdateHeaders={updateHeader} />
            </div>
          </div>


        </div>

      </div>
    </>
  );
};

export default DBMI;