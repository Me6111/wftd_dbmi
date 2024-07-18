// ClickCell.js

export const handleClickOnColumnHeader = (setEditingValue, columnKey, onClose) => {
    return function(event) {
      event.preventDefault();
      event.stopPropagation();

      setEditingValue(columnKey, true);

      const inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.value = event.target.innerText;
      event.target.innerHTML = '';
      event.target.appendChild(inputElement);

      inputElement.addEventListener('change', (e) => {
        e.target.parentNode.innerHTML = e.target.value;
        setEditingValue(columnKey, false);
      });

      inputElement.addEventListener('blur', onClose); // Add this line to listen for blur event

      inputElement.focus();
    };
};