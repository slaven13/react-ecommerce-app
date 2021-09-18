import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_drop_down.styles.scss";
import { connect } from "react-redux";
import { CartItem } from "../cart_item/cart_item.component";

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems: cartItems,
  };
};

const CartDropDownComponent = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export const CartDropDown = connect(mapStateToProps)(CartDropDownComponent);
