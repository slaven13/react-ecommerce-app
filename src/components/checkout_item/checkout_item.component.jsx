import React from "react";
import "./checkout_item.styles.scss";

export const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => {}}>&#10005;</div>
    </div>
  );
};
