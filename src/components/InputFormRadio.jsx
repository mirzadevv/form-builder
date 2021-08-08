import React from "react";

const InputFormRadio = ({
  name,
  id,
  type,
  caption,
  options,
  error,
  onChange,
}) => {
  return (
    <>
      <div className="form-elements-container">
        <p className="caption">{caption}</p>
        <div className="fields">
          {options.map((option) => (
            <div className="form-check" key={option.key}>
              <input
                name={name}
                id={id}
                type={type}
                value={option.value}
                className="form-check-input"
                onChange={onChange}
              />
              <label htmlFor="gender">{option.label}</label>
            </div>
          ))}
        </div>
        <small id={id} className="error-message">
          {error}
        </small>
      </div>
    </>
  );
};

export default InputFormRadio;
