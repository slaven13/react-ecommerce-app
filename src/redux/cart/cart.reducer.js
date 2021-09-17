import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: (prevState) => !prevState.hidden,
      };

    default:
      return state;
  }
};
