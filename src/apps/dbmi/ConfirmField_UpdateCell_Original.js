


// // C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ConfirmField_UpdateCell.js


import React, { useState, useEffect, useRef } from 'react';
import './ConfirmField_UpdateCell.css';

const InputField_UpdateCell = ({ originalValue, onValueChange }) => {
  const [value, setValue] = useState(originalValue);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      onValueChange(value);
      setValue(''); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      className="InputField_UpdateCell"
    />
  );
};

const ConfirmField_UpdateCell = ({ originalValue, inputValue, onConfirm }) => {
  return (
    <div className="ConfirmField_UpdateCell">
      <div className="ConfirmField_UpdateCell-ConfirmSign">Update?</div>
      <div className="ConfirmField_UpdateCell-Value">{originalValue}</div>
      <div className="ConfirmField_UpdateCell-ValueText">to</div>
      <div className="ConfirmField_UpdateCell-Value">{inputValue}</div>
      <div className="ConfirmField_UpdateCell-confirmButtonsContainer">
        <button className="ConfirmField_UpdateCell-confirmButton" onClick={() => onConfirm(inputValue)}>Yes</button>
        <button className="ConfirmField_UpdateCell-confirmButton" onClick={() => onConfirm(originalValue)}>No</button>
      </div>
    </div>
  );
};

export { ConfirmField_UpdateCell, InputField_UpdateCell };