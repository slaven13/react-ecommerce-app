import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_drop_down.styles.scss";

export const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton> GO TO CHECK OUT</CustomButton>
    </div>
  );
};
