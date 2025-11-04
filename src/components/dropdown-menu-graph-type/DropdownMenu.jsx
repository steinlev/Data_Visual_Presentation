import React, { useState } from "react";
import "./DropdownMenu.css"; // Import CSS file

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("TeamID"); // use string instead of number

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value); // Pass string value to parent
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="TeamID">TeamID</option>
      <option value="FHS">FHS</option>
      <option value="FH">FH</option>
    </select>
  );
};

export default Dropdown;


// import React from "react";
// import "./DropdownMenu.css"; // optional styles

// const Dropdown = ({ options, selected, onSelect }) => {
//   const handleChange = (event) => {
//     onSelect(event.target.value); // pass selection to parent
//   };

//   return (
//     <select value={selected} onChange={handleChange}>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default Dropdown;
