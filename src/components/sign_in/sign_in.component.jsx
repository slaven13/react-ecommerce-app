import React from "react";
import "./sign_in.styles.scss";
import { FormInput } from "../../components/form_input/form_input.component";
import { CustomButton } from "../../components/custom_button/custom_button.component";
import {
  signInWithGoogle,
  loginWithEmailAndPassword,
} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    const { email, password } = this.state;

    event.preventDefault();

    await loginWithEmailAndPassword(email, password);

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I aleady have an account</h2>
        <span>Sigin with your email and password</span>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />

          <div className="button-container">
            <CustomButton name="signin" type="submit" value="Sign In">
              Sign In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
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
  }
}

export default SignIn;
