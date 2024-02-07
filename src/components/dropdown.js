import React, { useState } from 'react';

const Dropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = options[selectedIndex];
    setSelectedOption(selectedOption);

    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <select value={selectedOption.value} onChange={handleSelectChange}>
      <option value="">Select an option...</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
