import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_drop_down.styles.scss";
import { useSelector } from "react-redux";
import { CartItem } from "../cart_item/cart_item.component";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router";
import * as cartActions from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

export const CartDropDown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);

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
