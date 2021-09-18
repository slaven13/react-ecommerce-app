import React from "react";
import "./cart_icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import * as cartActions from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
  };
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const CartIconComponent = ({ toggleCartHidden, cartItemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIconComponent);
