import React from "react";
import "./checkout_item.styles.scss";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";

export const CheckoutItem = ({ item }) => {
  const { id, name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const clearItemFromCart = (cartItemId) =>
    dispatch(cartActions.clearItemFromCart(cartItemId));
  const removeItemFromCart = (cartItemId) =>
    dispatch(cartActions.removeItem(cartItemId));
  const addItemToCart = (cartItem) =>
    dispatch(cartActions.addItemToCart(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};
