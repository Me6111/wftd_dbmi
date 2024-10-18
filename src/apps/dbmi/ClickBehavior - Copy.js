


// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ClickBehavior.js


import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmField_UpdateCell from './ConfirmField_UpdateCell'; 

export const handleCellClick = (event) => {
    const target = event.target;
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'InputField_UpdateCell'; 
    inputField.value = target.innerText;
    inputField.style.position = 'inherit';
    inputField.style.width = 'inherit';
    inputField.style.height = 'inherit';
    inputField.style.border = 'inherit';
    inputField.style.color = 'inherit';
    inputField.style.backgroundColor = 'inherit';

    // Initially set the input field's value and focus it
    inputField.value = target.innerText;
    const originalValue = target.innerText;
    target.innerText = ''; 
    target.appendChild(inputField);
    inputField.focus();

    // Check if there's any element with the class "InputField_UpdateCell" on the page
    const inputFieldExists = document.querySelector('.InputField_UpdateCell') !== null;

    document.addEventListener('click', (outerClickEvent) => {
        // Check if there are no elements with the class "ConfirmField_UpdateCell-container"
        const confirmFieldUpdateCellContainersExist = document.querySelectorAll('.ConfirmField_UpdateCell-container').length > 0;
        if (confirmFieldUpdateCellContainersExist) {
            return; // Exit early if such elements exist
        }

        // Only execute the following block if there's an input field and the click is outside of it
        if (inputFieldExists && outerClickEvent.target !== inputField) {
            // Remove the input field from the target element
            target.removeChild(target.firstChild);
            target.innerText = inputField.value; 

            // Check if the input field value is different from the original value
            if (inputField.value !== originalValue) {
                // Find the .tableContainer element
                const tableContainer = document.querySelector('.tableContainer');

                // Create a new div to hold the ConfirmField_UpdateCell component
                const confirmFieldDiv = document.createElement('div');
                confirmFieldDiv.className = 'ConfirmField_UpdateCell-container'; // Add a unique class for styling

                // Append the ConfirmField_UpdateCell component to the newly created div
                ReactDOM.render(<ConfirmField_UpdateCell originalValue={originalValue} inputValue={inputField.value} />, confirmFieldDiv);

                // Append the div containing the component to the .tableContainer
                tableContainer.appendChild(confirmFieldDiv);
            }
        }
    });
};