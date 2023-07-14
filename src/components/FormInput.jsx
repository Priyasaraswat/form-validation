import React from "react";
import "./formInput.css";
import { useState } from "react";

const FormInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  label,
  errorMessage,
  required,
  pattern,
}) => {
  const [blured, setBlured] = useState(false);
  const handleBlur = () => {
    setBlured(true);
  };
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required="true"
        pattern={pattern}
        onBlur={handleBlur}
        onFocus={()=> name==="confirmPassword" && setBlured(true)}
        blured={blured.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
