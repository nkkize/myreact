import React from "react";
import PropType from "prop-types";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          className="form-control"
          onChange={onChange}
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.PropType = {
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  defaultOption: PropType.string,
  value: PropType.oneOfType([PropType.string, PropType.number]),
  error: PropType.string,
  options: PropType.arrayOf(PropType.object),
};

export default SelectInput;
