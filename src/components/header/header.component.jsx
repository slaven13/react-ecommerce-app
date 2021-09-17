import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { firebaseAuth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { CartIcon } from "../cart_icon/cart_icon.component";
import { CartDropDown } from "../cart/cart_drop_down.component";

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => {
  return {
    currentUser,
    hidden,
  };
};

const HeaderComponent = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <Link
            to="/"
            className="option"
            onClick={() => firebaseAuth.signOut()}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};

export const Header = connect(mapStateToProps)(HeaderComponent);
