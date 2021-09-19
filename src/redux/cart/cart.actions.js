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

export const clearItemFromCart = (cartItemId) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: cartItemId,
  }
}

export const removeItem = (cartItemId) => {
  console.log("cartActions.removeItem");
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItemId,
  }
}
