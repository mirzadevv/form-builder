import React from "react";
const InputFormGroup = ({ name, id, label, error, onChange }) => {
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
        <small id={id} className="error-message">
          {error}
        </small>
      </div>
    </div>
  );
};

export default InputFormGroup;
