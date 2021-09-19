import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/signin_and_signup/signin_and_signup.component";
import { firebaseAuth, firebaseFirestore } from "./firebase/firebase.utils";
import React from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { connect } from "react-redux";
import * as userActions from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { CheckoutPage } from "./pages/checkout/checkout.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubsribeFromOnSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = doc(firebaseFirestore, "users", userAuth.uid);

          this.unsubsribeFromOnSnapshot = onSnapshot(userRef, {
            next: (snapshot) => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
              });
            },
            error: (error) => console.log(error),
          });
        } else {
          setCurrentUser(null);
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubsribeFromOnSnapshot();
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(userActions.setCurrentUser(user)),
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
