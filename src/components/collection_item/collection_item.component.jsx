import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./collection_item.styles.scss";
import * as cartActions from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

export const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItemToCart = (cartItem) =>
    dispatch(cartActions.addItemToCart(cartItem));

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItemToCart(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};
