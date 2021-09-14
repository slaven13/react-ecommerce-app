import React from "react";
import "./signin_and_signup.styles.scss";
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign_in_and_signup">
      <SignIn />
      <SignUp />
    </div>
  );
};
