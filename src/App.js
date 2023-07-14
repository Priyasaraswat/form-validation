import React, { useEffect } from "react";
import FormInput from "./components/FormInput";
import { useState } from "react";
import "./app.css";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    birthday: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      type: "text",
      label: "Username",
      errorMessage: "Username should greater than 3 characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "email",
      label: "Email",
      errorMessage: "Enter valid email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Birthday",
      type: "date",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
      errorMessage:
        "Password should be minimum 8 characters,atleast 1 number, 1 special character should be present",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const submitHandler = () => {
    console.log(values);
  };
  
    
  return (
    <div className="app">
      <div className="form">
        <h2 className="heading">Welcome</h2>
        {inputs.map((input) => (
          <FormInput
            name={input.name}
            placeholder={input.placeholder}
            key={input.id}
            type={input.type}
            value={values[input.name]}
            onChange={onChange}
            label={input.label}
            errorMessage={input.errorMessage}
            required={input.required}
            pattern={input.pattern}
          />
        ))}
        <button className="submitBtn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
