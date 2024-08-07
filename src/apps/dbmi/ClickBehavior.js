
// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ClickBehavior.js


import { createConfirmFieldUpdateCell } from './ConfirmField_UpdateCell'; // Adjust the path as necessary

export const handleCellClick = (event) => {
    const target = event.target;
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'InputField_UpdateCell'; // Class added here
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
        // Check if there's any element with the class "ConfirmField_UpdateCell" on the page
        const confirmFieldExists = document.querySelector('.ConfirmField_UpdateCell') !== null;

        // Prevent execution if the ConfirmField_UpdateCell exists
        if (!confirmFieldExists && inputFieldExists && outerClickEvent.target !== inputField && outerClickEvent.target !== target) {
            // Remove the input field from the target element
            target.removeChild(target.firstChild);
            target.innerText = inputField.value; 

            // Check if the input field value is different from the original value
            if (inputField.value !== originalValue) {
                // Use the imported function to create the ConfirmField_UpdateCell div
                const ConfirmField_UpdateCell = createConfirmFieldUpdateCell(originalValue, inputField.value);

                // Append the ConfirmField_UpdateCell to the body
                document.body.appendChild(ConfirmField_UpdateCell);
            }
        }
    });
};