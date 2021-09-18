import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItemToCart = (cartItem) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem,
  }
}
