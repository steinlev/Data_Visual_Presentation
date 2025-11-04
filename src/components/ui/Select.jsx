// src/components/ui/Select.jsx
import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { Select };
