import React, { useEffect, useRef, useState } from 'react';
import { handleColumnHeaderHover, resetColumnHover, handleRowHover, resetRowHoverStyle } from './HoverBehavior';

const Table = ({ data }) => {
  const tableRef = useRef(null);

  useEffect(() => {

  }, []); // Add dependencies here if needed

  const renderRows = (key, values) => {
    return values.map((value, index) => {
      const rowId = index;
      const cellContent = key === 'idx' ? rowId : value;

      return (
        <div className={key === 'idx' ? 'idxRow' : 'row'} key={rowId} id={rowId} onMouseEnter={handleRowHover} onMouseLeave={resetRowHoverStyle}>
          {/* Modified to use idxCell instead of cell for idxRow */}
          <div className={key === 'idx' ? 'idxCell' : 'cell'}>{cellContent}</div>
        </div>
      );
    });
  };

  return (
    <div className="tableContainer" ref={tableRef}>
      {Object.entries(data).map(([key, values]) => (
        <div className="scrollableColumn">
          <div className="column">
            <div className={key === 'idx' ? 'idxHeader' : 'columnHeader'} onMouseEnter={key == 'idx' ? null : handleColumnHeaderHover} onMouseLeave={key === 'idx' ? null : resetColumnHover}>
              <div className={key === 'idx' ? 'idxCell' : 'cell'}>
                {key}
              </div>
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