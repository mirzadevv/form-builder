import React, { useState } from "react";
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
      <div className="form-elements-container">
        <div className="form-group">
          <label htmlFor="firstname" className="caption">
            Firstname:
          </label>
          <input
            name="firstname"
            id="firstname"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-elements-container">
        <div className="form-group">
          <label htmlFor="lastname" className="caption">
            Lastname:
          </label>
          <input
            name="lastname"
            id="lastname"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-elements-container">
        <div className="form-group">
          <label htmlFor="age" className="caption">
            Age:
          </label>
          <input
            name="age"
            id="age"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-elements-container">
        <div className="form-group">
          <label htmlFor="email" className="caption">
            Email:
          </label>
          <input
            name="email"
            id="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-elements-container">
        <p className="caption">what's your gender?</p>
        <div className="fields">
          <div className="form-check">
            <input
              name="gender"
              id="gender"
              type="radio"
              value="male"
              className="form-check-input"
              onChange={handleChange}
            />
            <label htmlFor="gender">Male</label>
          </div>
          <div className="form-check">
            <input
              name="gender"
              id="gender"
              type="radio"
              value="female"
              className="form-check-input"
              onChange={handleChange}
            />
            <label htmlFor="gender">Female</label>
          </div>
        </div>
      </div>
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
