import React from "react";
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
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart(displayName, email, password);

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Siginup with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            label="Display name"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <div className="button-container">
            <CustomButton name="signup" type="submit" value="Sign Up">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
