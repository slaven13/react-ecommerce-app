import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { CheckoutItem } from "../../components/checkout_item/checkout_item.component";
import { StripeCheckoutButton } from "../../components/stripe_button/stripe_button.component";

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};
