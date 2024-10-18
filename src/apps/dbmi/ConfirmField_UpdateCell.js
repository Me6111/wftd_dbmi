


// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ConfirmField_UpdateCell.js

import React, { useState, useRef, useEffect } from 'react';
import './ConfirmField_UpdateCell.css';

const InputField_UpdateCell = ({ originalValue }) => {
  const [value, setValue] = useState(originalValue);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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

export { InputField_UpdateCell };