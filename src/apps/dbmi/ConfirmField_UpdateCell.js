// Import the CSS file
import './styles.css';

export function createConfirmFieldUpdateCell(originalValue, inputValue) {
  const ConfirmField_UpdateCell = document.createElement('div');
  ConfirmField_UpdateCell.className = "ConfirmField_UpdateCell";

  ConfirmField_UpdateCell.innerHTML = `
    <div class="ConfirmField_UpdateCell-ConfirmSign">Update?</div>
    

    <div class="ConfirmField_UpdateCell-Value">${originalValue}</div>

        <div class="ConfirmField_UpdateCell-ValueText">to</div>


    <div class="ConfirmField_UpdateCell-Value">${inputValue}</div>
    
    <div class="ConfirmField_UpdateCell-confirmButtonsContainer">
      <button class="ConfirmField_UpdateCell-confirmButton">Yes</button>
      <button class="ConfirmField_UpdateCell-confirmButton">No</button>
    </div>
  `;

  // No additional JavaScript styling needed since CSS handles it

  // Disable pointer events for all elements except the ConfirmField_UpdateCell
  document.body.classList.add('disable-pointer-events');

  return ConfirmField_UpdateCell;
}