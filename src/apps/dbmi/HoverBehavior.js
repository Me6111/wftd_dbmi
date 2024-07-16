export const handleColumnHeaderHover = (event) => {
    // Find the closest ancestor with the class 'column'
    const parentContainer = event.currentTarget.closest('.column');

    if (parentContainer) {
        parentContainer.style.borderLeft = '1px solid white';
        parentContainer.style.borderRight = '1px solid white';
        parentContainer.style.color = 'white'; 
    }
};

export const resetHoverStyle = () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.style.borderLeft = '';
        column.style.borderRight = '';
        column.style.color = 'rgba(255, 255, 255, 0.6)'; // Ensure color is reset to avoid conflicts
    });
};
  export const handleRowHover = (event) => {
    const hoveredRowId = event.currentTarget.id;
    const rowsWithSameId = document.querySelectorAll(`.row[id^="${hoveredRowId}"]`);
  
    rowsWithSameId.forEach((row) => {
      row.style.borderTop = '1px solid white';
      row.style.borderBottom = '1px solid white';
      row.style.color = 'white';
    });
  };
  
  export const resetRowHoverStyle = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
      row.style.borderTop = '';
      row.style.borderBottom = '';
      row.style.color = '';
    });
  };