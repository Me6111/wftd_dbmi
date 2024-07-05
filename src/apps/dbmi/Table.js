// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\apps\Locations_example\Table.js

import React, { useState } from 'react';
import './Table.css';
import { useHoveredColumn } from './Table_hover_column_header';
import { handleCellClick, handleHeaderClick, handleCellChange, handleHeaderChange } from './Table_click_value_header'; // Import the functions

const Table = ({ headers, rows, onUpdateHeaders }) => {
  const [editingCell, setEditingCell] = useState(null);
  const [editingHeader, setEditingHeader] = useState(null);

  const { hoveredColumnIndex, handleMouseEnter, handleMouseLeave } = useHoveredColumn();

  return (
    <div className='table_container'>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleHeaderClick(setEditingHeader, index)}
              >
                {editingHeader === index ? (
                  <input
                    type="text"
                    defaultValue={header}
                    onBlur={(e) => handleHeaderChange(setEditingHeader, headers, onUpdateHeaders, index, e)}
                    autoFocus
                  />
                ) : (
                  header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`table-cell ${hoveredColumnIndex === cellIndex ? 'hovered' : ''}`}
                >
                  {editingCell && editingCell.rowIndex === rowIndex && editingCell.cellIndex === cellIndex ? (
                    <input
                      type="text"
                      defaultValue={cell}
                      onBlur={(e) => handleCellChange(setEditingCell, rows, rowIndex, cellIndex, e)}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleCellClick(setEditingCell, rowIndex, cellIndex)}>
                      {cell}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;