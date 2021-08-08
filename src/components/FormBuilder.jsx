import React, { useState } from "react";
import InputFormGroup from "./InputFormGroup";
import InputFormRadio from "./InputFormRadio";
import InputFormSelect from "./InputFormSelect";
const FormBuilder = ({ formElements }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.currentTarget.name] = e.currentTarget.value;
    setFormData(newFormData);
  };

  return (
    <form>
      {formElements.map((formElement) => {
        if (formElement.elementType === "input-form-group") {
          return (
            <InputFormGroup
              key={formElement.key}
              name={formElement.name}
              id={formElement.id}
              label={formElement.label}
              onChange={handleChange}
            />
          );
        }

        if (formElement.elementType === "input-form-radio") {
          return (
            <InputFormRadio
              key={formElement.key}
              name={formElement.name}
              id={formElement.id}
              type={formElement.type}
              caption={formElement.caption}
              options={formElement.options}
              onChange={handleChange}
            />
          );
        }

        if (formElement.elementType === "input-form-select") {
          return (
            <InputFormSelect
              key={formElement.key}
              name={formElement.name}
              id={formElement.id}
              caption={formElement.caption}
              options={formElement.options}
              onChange={handleChange}
            />
          );
        }
      })}

      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
