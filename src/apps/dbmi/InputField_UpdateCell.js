





// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\InputField_UpdateCell.js

import React from 'react';

const ConfirmField_UpdateCell = ({ isVisible, originalValue, editValue }) => {
  return (
    <span className="ConfirmField_UpdateCell">
      Original: {originalValue},
      Edit: {editValue}
    </span>
  );
};

const InputField_UpdateCell = ({ value }) => {
  const [originalValue, setOriginalValue] = React.useState(value);
  const [showX, setShowX] = React.useState(false);

  const handleBlur = () => {
    const editValue = document.querySelector('.InputField_UpdateCell').value;
    console.log(`originalValue: ${originalValue}, editValue: ${editValue}`);
    
    if (originalValue !== editValue) {
      setShowX(true);
    } else {
      setShowX(false);
    }
  };

  return (
    <>
      <input 
        className="InputField_UpdateCell" 
        defaultValue={value} 
        autoFocus 
        onBlur={handleBlur}
      />
      {showX && <ConfirmField_UpdateCell isVisible={true} originalValue={originalValue} editValue={document.querySelector('.InputField_UpdateCell').value} />}
    </>
  );
};

export default InputField_UpdateCell;