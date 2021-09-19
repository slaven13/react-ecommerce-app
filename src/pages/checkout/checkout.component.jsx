import React from "react";
import { CustomButton } from "../../components/custom_button/custom_button.component";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { CheckoutItem } from "../../components/checkout_item/checkout_item.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export const CheckoutPageComponent = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <CustomButton>ORDER NOW</CustomButton>
    </div>
  );
};

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent);
