import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_drop_down.styles.scss";
import { connect } from "react-redux";
import { CartItem } from "../cart_item/cart_item.component";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import * as cartActions from "../../redux/cart/cart.actions";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCartHidden: () => dispatch(cartActions.toggleCartHidden())
//   };
// };

const CartDropDownComponent = ({ cartItems, cartItemsCount, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItemsCount ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <span className="message">
            You have no products in your cart. Try adding some from our
          </span>
          <Link to="/shop" className="option">
            SHOP PAGE
          </Link>
        </div>
      )}
      <CustomButton
        onClick={() => {
          dispatch(cartActions.toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

export const CartDropDown = withRouter(
  connect(mapStateToProps)(CartDropDownComponent)
);
