import React, { useState } from "react";
import "./sign_in.styles.scss";
import { FormInput } from "../../components/form_input/form_input.component";
import { CustomButton } from "../../components/custom_button/custom_button.component";
import * as userActions from "../../redux/user/user.actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(userActions.googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(userActions.emailSignInStart({ email, password })),
  };
};

const SignInComponent = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

    setUserCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I aleady have an account</h2>
      <span>Sigin with your email and password</span>
      <form className="form" onSubmit={handleSubmit}>
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

        <div className="button-container">
          <CustomButton name="signin" type="submit" value="Sign In">
            Sign In
          </CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            name="signin"
            type="button"
            value="Sign In"
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
