


// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\ClickBehavior.js

let clickedCells = new Set();

export const handleCellClick = (event) => {
  const clickedElement = event.target.closest('.cell');
  if (!clickedElement) return; // If no .cell was found, do nothing

  const cellValue = clickedElement.textContent.trim();
  
  // Check if the cell has already been clicked
  if (!clickedCells.has(clickedElement)) {
    console.log('Clicked cell value:', cellValue);
    
    const xElement = clickedElement.querySelector('.ConfirmField_UpdateCell') || document.createElement('div');
    xElement.className = 'ConfirmField_UpdateCell';
    
    if (!clickedElement.querySelector('.ConfirmField_UpdateCell')) {
      clickedElement.appendChild(xElement);
    }
    
    // Create HTML content
    const htmlContent = `<span>${cellValue}</span>`;
    xElement.innerHTML = htmlContent;

    // Add the cell to the set after processing
    clickedCells.add(clickedElement);
  }
};