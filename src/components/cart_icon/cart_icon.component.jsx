import React from "react";
import "./cart_icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import * as cartActions from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
  };
};

const CartIconComponent = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export const CartIcon = connect(null, mapDispatchToProps)(CartIconComponent);
