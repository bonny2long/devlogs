import React from 'react';

const ToggleButton = ({ showAll, onClick }) => (
  <button className="dynamic-btn" onClick={onClick}>
    {showAll ? 'Show Less' : 'See More'}
  </button>
);

export default ToggleButton;