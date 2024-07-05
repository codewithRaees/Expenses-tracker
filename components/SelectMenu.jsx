import React from "react";

const SelectMenu = ({
  id,
  name,
  value,
  onChange,
  error,
  label,
  options,
  defaultText,
  hidden,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>

      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultText && (
          <option value="" hidden={hidden}>
            {defaultText}
          </option>
        )}
        {options.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default SelectMenu;
