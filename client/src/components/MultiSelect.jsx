import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;

  &:hover {
    border-color: #999;
  }

  &:after {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #666;
    margin-left: 10px;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  input {
    margin-right: 8px;
  }
`;

const SelectedCount = styled.span`
  color: #666;
  font-size: 0.9em;
`;

const MultiSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOption = (optionId) => {
    const newValue = value.includes(optionId)
      ? value.filter(id => id !== optionId)
      : [...value, optionId];
    onChange(newValue);
  };

  const getDisplayText = () => {
    if (value.length === 0) return placeholder;
    if (value.length === 1) {
      return options.find(opt => opt.id === value[0])?.label;
    }
    return `${value.length} services selected`;
  };

  return (
    <SelectContainer ref={containerRef}>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        <SelectedCount>{getDisplayText()}</SelectedCount>
      </SelectButton>
      {isOpen && (
        <DropdownList>
          {options.map(option => (
            <Option key={option.id}>
              <input
                type="checkbox"
                checked={value.includes(option.id)}
                onChange={() => toggleOption(option.id)}
              />
              {option.label}
            </Option>
          ))}
        </DropdownList>
      )}
    </SelectContainer>
  );
};

export default MultiSelect; 