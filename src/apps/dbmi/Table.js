
// Table.js


import React from 'react';
import { handleColumnHeaderHover, resetColumnHover, handleRowHover, resetRowHoverStyle } from './HoverBehavior'; // Adjust the path as necessary
const Table = ({ data }) => {
  const renderRows = (key, values) => {
    return values.map((value, index) => {
      const rowId = index; // This generates the ID for the row

      // For idxRow, we want the cell to display the same value as the row's ID
      const cellContent = key === 'idx' ? rowId : value;

      return (
        <div
          className={key === 'idx' ? 'idxRow' : 'row'}
          key={rowId}
          id={rowId}
          onMouseEnter={handleRowHover} // Applied to both 'row' and 'idxRow'
          onMouseLeave={resetRowHoverStyle} // Applied to both 'row' and 'idxRow'
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
              // Only apply hover handlers if the class is 'columnHeader' (excluding 'idxHeader')
              onMouseEnter={key === 'idx' ? null : handleColumnHeaderHover}
              onMouseLeave={key === 'idx' ? null : resetColumnHover}
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