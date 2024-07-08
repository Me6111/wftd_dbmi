

// C:\Users\user\Desktop\projects\wftd_dbmi\src\index.js


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import './index.css';
// import Portal from './apps/portal/portal';
import DBMI from './apps/dbmi/dbmi';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DBMI />} />

        </Routes>
      </BrowserRouter>
    </Provider>
 </React.StrictMode>
);

reportWebVitals();