import React from "react";
const InputFormSelect = ({ name, id, caption, options, onChange }) => {
  return (
    <div className="form-group">
      <label for={id} className="caption">
        {caption}
      </label>
      <select className="form-control" id={id} name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.key}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default InputFormSelect;
