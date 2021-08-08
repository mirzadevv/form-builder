import React from "react";
const InputFormGroup = ({ name, id, label, onChange }) => {
  return (
    <div className="form-elements-container">
      <div className="form-group">
        <label htmlFor={name} className="caption">
          {label}
        </label>
        <input
          name={name}
          id={id}
          className="form-control"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputFormGroup;
