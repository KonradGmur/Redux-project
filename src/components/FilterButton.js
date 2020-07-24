import React from "react";

const FilterButton = ({ onClick, children, active }) => {
  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  );
};
export default FilterButton;
