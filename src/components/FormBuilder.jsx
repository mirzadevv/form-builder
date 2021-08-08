import React, { useState } from "react";
import InputFormGroup from "./InputFormGroup";
import InputFormRadio from "./InputFormRadio";
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
      />

      <div className="form-group">
        <label for="state" className="caption">
          Which state do you live in?
        </label>
        <select
          className="form-control"
          id="state"
          name="state"
          onChange={handleChange}
        >
          <option value="california">California</option>
          <option value="texas">Texas</option>
          <option value="florida">Florida</option>
          <option value="newyork">Newyork</option>
          <option value="pennsylvania">Pennsylvania</option>
        </select>
      </div>

      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
