import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shoppage.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/signin_and_signup/signin_and_signup.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { CheckoutPage } from "./pages/checkout/checkout.component";
import * as userActions from "./redux/user/user.actions";

export const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

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
};
