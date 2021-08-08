import React, { useEffect, useState } from "react";
import FormBuilder from "./components/FormBuilder";
import { getFormElements } from "./form-elements-data/FormElements";

import "./App.css";
const App = () => {
  const [formElements, setFormElements] = useState([]);
  useEffect(() => {
    setFormElements(getFormElements());
  }, []);
  return (
    <div className="app-container">
      <div className="form-container">
        <FormBuilder formElements={formElements} />
      </div>
    </div>
  );
};

export default App;
