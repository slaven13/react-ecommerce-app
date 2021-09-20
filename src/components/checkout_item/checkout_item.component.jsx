import React from "react";
import "./checkout_item.styles.scss";
import { connect } from "react-redux";
import * as cartActions from "../../redux/cart/cart.actions";

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (cartItemId) =>
      dispatch(cartActions.clearItemFromCart(cartItemId)),
    removeItemFromCart: (cartItemId) => dispatch(cartActions.removeItem(cartItemId)),
    addItemToCart: (cartItem) => dispatch(cartActions.addItemToCart(cartItem)),
  };
};

const CheckoutItemComponent = ({
  item,
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
}) => {
  const { id, name, imageUrl, price, quantity } = item;
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

export const CheckoutItem = connect(
  null,
  mapDispatchToProps
)(CheckoutItemComponent);
