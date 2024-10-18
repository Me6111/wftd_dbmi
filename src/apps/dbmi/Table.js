import React, { useEffect, useRef, useState } from 'react';
import { handleColumnHeaderHover, resetColumnHover, handleRowHover, resetRowHoverStyle } from './HoverBehavior';
import InputField_UpdateCell from './InputField_UpdateCell';
import './ConfirmField_UpdateCell.css';

const Table = ({ data }) => {
  const tableRef = useRef(null);
  const [isXComponentVisible, setIsXComponentVisible] = useState({});

  useEffect(() => {
    // Add any side effects here
  }, []);

  const renderRows = (key, values) => {
    return values.map((value, index) => {
      const rowId = index;
      const cellContent = key === 'idx' ? rowId : value;

      return (
        <div 
          className={key === 'idx' ? 'idxRow' : 'row'} 
          key={rowId} 
          id={rowId} 
          onMouseEnter={handleRowHover} 
          onMouseLeave={resetRowHoverStyle}
        >
          <div 
            className={key === 'idx' ? 'idxCell' : 'cell'} 
            id={`columnHeader-${key}-${rowId}`}
            onClick={() => {
              const element = document.getElementById(`columnHeader-${key}-${rowId}`);
              if (!element.querySelector('input')) {
                setIsXComponentVisible(prev => ({
                  ...prev,
                  [`columnHeader-${key}-${rowId}`]: true
                }));
                element.textContent = '';
              }
            }}
          >
            {cellContent}
            {isXComponentVisible[`columnHeader-${key}-${rowId}`] && <InputField_UpdateCell value={cellContent} />}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="tableContainer" ref={tableRef}>
      {Object.entries(data).map(([key, values]) => (
        <div className="scrollableColumn">
          <div className="column">
            <div 
              className={key === 'idx' ? 'idxHeader' : 'columnHeader'} 
              onMouseEnter={key !== 'idx' ? handleColumnHeaderHover : null} 
              onMouseLeave={key !== 'idx' ? resetColumnHover : null}
            >
              <div className={key === 'idx' ? 'idxCell' : 'cell'} id={`columnHeader-${key}`}>
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