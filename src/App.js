import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/signin_and_signup/signin_and_signup.component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { CheckoutPage } from "./pages/checkout/checkout.component";
import * as userActions from "./redux/user/user.actions";
class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToState = (dispatch) => {
  return {
    checkUserSession: () => dispatch(userActions.checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(App);
