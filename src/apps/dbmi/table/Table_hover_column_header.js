// C:\Users\user\Desktop\projects\wftd_locations\wftd_locations\src\apps\Locations_example\Table_hover_column_header.js

import { useState } from 'react';

export const useHoveredColumn = () => {
  const [hoveredColumnIndex, setHoveredColumnIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredColumnIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredColumnIndex(null);
  };

  return { hoveredColumnIndex, handleMouseEnter, handleMouseLeave };
};