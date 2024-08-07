

// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ConfirmField_UpdateCell.js



import React from 'react';

const ConfirmField_UpdateCell = ({ originalValue, inputValue, onConfirm, onCancel }) => {
  return (
    <div className="ConfirmField_UpdateCell">
      <div style={{ marginBottom: 10 }}>Original Value: {originalValue}</div>
      <div>Input Field Value: {inputValue}</div>
      <div style={{ marginTop: 10 }}>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmField_UpdateCell;
