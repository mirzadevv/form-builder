const formElements = [
  {
    key: 1,
    name: "firstname",
    id: "firstname",
    label: "FirstName",
    elementType: "input-form-group",
    handleError: [{ maxLength: 5, isRequired: true }],
  },
  {
    key: 2,
    name: "lastname",
    id: "lastName",
    label: "LastName",
    elementType: "input-form-group",
    handleError: [{ maxLength: 4, isRequired: true }],
  },
  {
    key: 3,
    name: "age",
    id: "age",
    label: "Age",
    elementType: "input-form-group",
    handleError: [{ maxValue: 120, isRequired: true }],
  },
  {
    key: 4,
    name: "email",
    id: "email",
    label: "Eamil",
    elementType: "input-form-group",
    handleError: [{ isEmail: true, isRequired: true }],
  },

  {
    key: 5,
    name: "gender",
    id: "gender",
    elementType: "input-form-radio",
    type: "radio",
    caption: "What is your gender?",
    handleError: [{ isRequired: true }],
    options: [
      { key: 1, value: "male", label: "Male" },
      { key: 2, value: "female", label: "Female" },
    ],
  },

  {
    key: 6,
    name: "state",
    id: "state",
    elementType: "input-form-select",
    caption: "Which state do you live in?",
    handleError: [{ isRequired: true }],
    options: [
      { key: 1, value: "california", label: "California" },
      { key: 2, value: "texas", label: "Texas" },
      { key: 3, value: "florida", label: "Florida" },
      { key: 4, value: "newyork", label: "Newyork" },
      { key: 5, value: "pennsylvania", label: "Pennsylvania" },
    ],
  },
];

export function getFormElements() {
  return formElements;
}
