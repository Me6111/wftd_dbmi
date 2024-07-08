// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\apps\Locations_example\Table_click_value_header.js

export const handleCellClick = (setEditingCell, rowIndex, cellIndex) => {
  setEditingCell({ rowIndex, cellIndex });
};

export const handleHeaderClick = (setEditingHeader, index) => {
  setEditingHeader(index);
};

export const handleCellChange = (setEditingCell, rows, rowIndex, cellIndex, event) => {
  const updatedRows = [...rows];
  updatedRows[rowIndex][cellIndex] = event.target.value;
  setEditingCell(null);
};

export const handleHeaderChange = (setEditingHeader, headers, onUpdateHeaders, index, event) => {
  const newHeaders = [...headers];
  newHeaders[index] = event.target.value;
  onUpdateHeaders(newHeaders);
  setEditingHeader(null);
};