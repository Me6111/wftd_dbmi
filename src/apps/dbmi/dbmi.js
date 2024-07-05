





import React, { useState } from 'react';
import './dbmi.css';

import MainMenuButton from '../../components/MainMenuButton/MainMenuButton';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import Table from './Table'; // Import the Table component
import { data, columns } from './Table_data'; // Import data and columns from Table_data.js

const DBMI = () => {
  // Transforming the data for the Table component
  const initialHeaders = columns.map(column => column.Header); // Extract headers
  const rows = data.map(item => Object.values(item)); // Convert each item to an array of values

  // State to manage headers
  const [headers, setHeaders] = useState(initialHeaders);

  // Function to handle header updates
  const updateHeader = (newHeaders) => {
    setHeaders(newHeaders);
  };

  return (
    <>
      <MainMenuButton />
      <BackgroundContainer />

      <div className="Locations-app-container">
        <div className="Locations-app-container-title">
          <h1 className="Locations-app-title">DATABASES MANAGEMENT</h1>
        </div>

        <div className="Locations-app-container-content">
          {/* Pass transformed headers and rows as props, along with the updateHeader function */}
          <Table headers={headers} rows={rows} onUpdateHeaders={updateHeader} />
        </div>
      </div>
    </>
  );
};

export default DBMI;