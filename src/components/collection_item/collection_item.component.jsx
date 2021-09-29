import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./collection_item.styles.scss";
import * as cartActions from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (cartItem) => dispatch(cartActions.addItemToCart(cartItem)),
  };
};

const CollectionItemComponent = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton className="custom-button" inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(CollectionItemComponent);
