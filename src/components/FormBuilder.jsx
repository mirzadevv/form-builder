import React, { useState } from "react";
import InputFormGroup from "./InputFormGroup";
import InputFormRadio from "./InputFormRadio";
import InputFormSelect from "./InputFormSelect";
const FormBuilder = ({ formElements, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.currentTarget.name] = e.currentTarget.value;
    setFormData(newFormData);
  };

  function doSubmit(e) {
    e.preventDefault();
    const errors = handleError(formElements);
    setErrors(errors || {});
    if (errors) return; // if there are no errors, formData will be returned
    onSubmit(formData);
  }

  function handleError(formElements) {
    const returnedErrors = {};

    formElements.map((formElement) => {
      formElement.handleError.map((item) => {
        if (item.isRequired) {
          if (!formData[formElement.name]) {
            returnedErrors[
              formElement.name
            ] = `Your ${formElement.name} is Required`;
          }
        }

        if (item.maxLength) {
          if (
            formData[formElement.name] &&
            formData[formElement.name].length > item.maxLength
          ) {
            returnedErrors[
              formElement.name
            ] = `Your ${formElement.name} can not be more than ${item.maxLength} characters`;
          }
        }

        if (item.isEmail) {
          if (formData[formElement.name]) {
            const emailRe =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isEmail = emailRe.test(
              String(formData[formElement.name]).toLowerCase()
            );
            if (isEmail === false) {
              returnedErrors[
                formElement.name
              ] = `Please enter your email address in correct format`;
            }
          }
        }

        if (item.maxValue) {
          if (
            formData[formElement.name] &&
            formData[formElement.name] > item.maxValue
          ) {
            returnedErrors[
              formElement.name
            ] = `Your ${formElement.name} can not be more than ${item.maxValue} `;
          }
        }
      });
    });

    return Object.keys(returnedErrors).length === 0 ? null : returnedErrors;
  }

  return (
    <form onSubmit={doSubmit}>
      {formElements.map((formElement) => {
        if (formElement.elementType === "input-form-group") {
          return (
            <InputFormGroup
              key={formElement.key}
              name={formElement.name}
              id={formElement.id}
              label={formElement.label}
              error={errors[formElement.name]}
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
              error={errors[formElement.name]}
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
              error={errors[formElement.name]}
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
