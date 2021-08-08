import React from "react";

const InputFormRadio = ({ name, id, type, caption, options, onChange }) => {
  return (
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
    </div>
  );
};

export default InputFormRadio;
