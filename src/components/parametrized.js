import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';

const ParametrizedDropdown = ({ options, title, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey, event) => {
    const selected = options.find((option) => option.value === eventKey);
    setSelectedOption(selected);
    
    if (onSelect) {
      onSelect(selected);
    }
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedOption ? selectedOption.label : title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} eventKey={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};


 
export default ParametrizedDropdown;
