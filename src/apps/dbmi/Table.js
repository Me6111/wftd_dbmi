import React from 'react';
import { handleColumnHeaderHover, resetHoverStyle, handleRowHover, resetRowHoverStyle } from './HoverBehavior'; // Adjust the path as necessary

const Table = ({ data }) => {
  const renderRows = (key, values) => {
    return values.map((value, index) => {
      const rowId = `row-${index}`;

      return (
        <div
          className="row"
          key={rowId}
          id={rowId}
          onMouseEnter={handleRowHover}
          onMouseLeave={resetRowHoverStyle}
        >
          <div className="cell">{value}</div>
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
              className="columnHeader"
              onMouseEnter={handleColumnHeaderHover}
              onMouseLeave={resetHoverStyle}
            >
              <div className="cell" >{key}</div>
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