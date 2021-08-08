import React, { useEffect, useState } from "react";
import "./App.css";
import FormBuilder from "./components/FormBuilder";
import { getFormElements } from "./form-elements-data/FormElements";

const App = () => {
  const [formElements, setFormElements] = useState([]);
  const [returnedFormData, setReturnedFormData] = useState([]);

  useEffect(() => {
    setFormElements(getFormElements());
  }, []);

  const handleSubmit = (formData) => {
    setReturnedFormData(formData);
    alert("Data Returned Successfully");
  };
  console.log("Returned Data", returnedFormData);

  return (
    <div className="app-container">
      <div className="form-container">
        <FormBuilder formElements={formElements} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
