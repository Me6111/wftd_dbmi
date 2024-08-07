import React, { useState } from 'react';
import { handleColumnHeaderHover, resetColumnHover, handleRowHover, resetRowHoverStyle } from './HoverBehavior'; // Adjust the path as necessary
import { handleCellClick } from './ClickBehavior';

const Table = ({ data }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);

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
          <div 
            className={key === 'idx' ? 'idxCell' : 'cell'} 
            onClick={(e) => {
              e.stopPropagation(); // Prevents the input field from appearing on every click within the table
              handleCellClick(e); // Handles the cell click to show the input field
            }}
          >
            {cellContent}
          </div>
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
              <div className={key === 'idx' ? 'idxCell' : 'cell'}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents the input field from appearing on every click within the table
                            handleCellClick(e); // Handles the cell click to show the input field
                          }}
              >{key}</div>
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