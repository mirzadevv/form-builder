import React, { useState } from "react";
import InputFormGroup from "./InputFormGroup";
import InputFormRadio from "./InputFormRadio";
import InputFormSelect from "./InputFormSelect";
const FormBuilder = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.currentTarget.name] = e.currentTarget.value;
    setFormData(newFormData);
  };

  console.log(formData);

  return (
    <form>
      <InputFormGroup
        name="firstname"
        id="firstname"
        label="FirstName:"
        onChange={handleChange}
      />

      <InputFormGroup
        name="lastname"
        id="lastname"
        label="Lastname:"
        onChange={handleChange}
      />

      <InputFormGroup
        name="age"
        id="age"
        label="Age:"
        onChange={handleChange}
      />

      <InputFormGroup
        name="email"
        id="email"
        label="Email:"
        onChange={handleChange}
      />

      <InputFormRadio
        name="gender"
        id="gender"
        type="radio"
        caption="What's your gender?"
        options={[
          { key: 1, value: "male", label: "Male" },
          { key: 2, value: "female", label: "Female" },
        ]}
        onChange={handleChange}
      />

      <InputFormSelect
        name="state"
        id="state"
        caption="Which state do you live in?"
        options={[
          { key: 1, value: "california", label: "California" },
          { key: 2, value: "texas", label: "Texas" },
          { key: 3, value: "florida", label: "Florida" },
          { key: 4, value: "newyork", label: "Newyork" },
          { key: 5, value: "pennsylvania", label: "Pennsylvania" },
        ]}
        onChange={handleChange}
      />

      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
