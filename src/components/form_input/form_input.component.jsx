import React from "react";
import "./form_input.styles.scss";

export const FormInput = ({ label, handleChange, ...otherFormInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormInputProps}
      />
      {label ? (
        <label
          className={`${otherFormInputProps.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
