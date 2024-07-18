// Table.js

import React from 'react';
import { handleClickOnColumnHeader } from './clickCell';

const Table = ({ data }) => {
  const [editingValues, setEditingValues] = React.useState({});

  const handleEditValueChange = (columnKey, isEditing) => {
    setEditingValues(prevState => ({
      ...prevState,
      [columnKey]: isEditing,
    }));
  };

  const onClose = (event) => {
    const inputElement = event.target;
    const parent = inputElement.parentNode;
    parent.innerHTML = inputElement.value; // Restore the original text
    setEditingValues(prevState => ({
      ...prevState,
      [parent.id]: false, // Ensure the column is marked as not editing
    }));
  };

  const renderRows = (key, values) => {
    return values.map((value, index) => {
      const rowId = index;
      const cellContent = key === 'idx' ? rowId : value;

      return (
        <div
          className={key === 'idx' ? 'idxRow' : 'row'}
          onClick={(event) => handleClickOnColumnHeader(handleEditValueChange, key, onClose)(event)}

          key={rowId}
          id={rowId} // Use id to identify columns in onClose
        >
          <div className={key === 'idx' ? 'idxCell' : 'cell'}>{cellContent}</div>
        </div>
      );
    });
  };

  return (
    <div className="tableContainer">
      {Object.entries(data).map(([key, values]) => (
        <div className="scrollableColumn">
          <div className="column">
            <div
              className={key === 'idx' ? 'idxHeader' : 'columnHeader'}
              onClick={(event) => handleClickOnColumnHeader(handleEditValueChange, key, onClose)(event)}
            >
              <div className={key === 'idx' ? 'idxCell' : 'cell'}>{key}</div>
            </div>
            <div className="rowsContainer">
              {renderRows(key, values)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;