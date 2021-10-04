import React, { useState } from "react";
import "./sign_up.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";
import * as userActions from "../../redux/user/user.actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (displayName, email, password) =>
      dispatch(userActions.signUpStart({ displayName, email, password })),
  };
};

const SignUpComponent = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {    
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart(displayName, email, password);

    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Siginup with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display name"
          value={displayName}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          required
          handleChange={handleChange}
        />
        <div className="button-container">
          <CustomButton name="signup" type="submit" value="Sign Up">
            Sign Up
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export const SignUp = connect(null, mapDispatchToProps)(SignUpComponent);
