import React from "react";
const InputFormSelect = ({ name, id, caption, options, error, onChange }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={id} className="caption">
          {caption}
        </label>
        <select
          className="form-control"
          id={id}
          name={name}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.key}>{option.label}</option>
          ))}
        </select>
        <small id={id} className="error-message">
          {error}
        </small>
      </div>
    </>
  );
};

export default InputFormSelect;
