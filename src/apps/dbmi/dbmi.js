// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps/dbmi/dbmi.js

import React, { useState } from 'react';

import './dbmi.css';
import './table.css';

import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import NavBar from '../../components/NavBar/NavBar';
import Table from './Table'; // Import the Table component

const DBMI = () => {
  const data = {
    Country: [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
      "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
      "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
      "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
      "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",

    ],
    State: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
      "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
      "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
      "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania"
    ],
    City: [
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego",
      "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "San Francisco", "Indianapolis",
      "Seattle", "Denver", "Washington", "Boston", "El Paso", "Detroit", "Nashville", "Portland", "Oklahoma City",
      "Las Vegas", "Memphis", "Baltimore", "Louisville", "Milwaukee", "Albuquerque", "Tucson", "Fresno",
      "Sacramento", "Atlanta", "Kansas City", "Mesa", "Virginia Beach"
    ]
  };
  

  return (
    <>
      <BackgroundContainer />
      <div id="screen-content-container">
        <NavBar />
        <div className="AppContainer">
          <div className="Locations-app-container">
            <div className="Locations-app-container-content">
              <Table data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DBMI;