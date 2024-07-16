
// C:\Users\user\Desktop\projects\wftd_dbmi\src\apps\dbmi\hoverColumn.js

import React, { useEffect, useRef } from 'react';

const HoverColumn = ({ children, onMouseEnter, onMouseLeave }) => {
  const columnHeaderRef = useRef(null);

  useEffect(() => {
    const currentColumnHeader = columnHeaderRef.current;
    if (currentColumnHeader) {
      currentColumnHeader.addEventListener('mouseenter', onMouseEnter);
      currentColumnHeader.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (currentColumnHeader) {
        currentColumnHeader.removeEventListener('mouseenter', onMouseEnter);
        currentColumnHeader.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [onMouseEnter, onMouseLeave]);

  return (
    <div ref={columnHeaderRef}>{children}</div>
  );
};

export default HoverColumn;