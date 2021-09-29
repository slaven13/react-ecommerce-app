import { ShopActionTypes } from "./shop.types";

export const setCollections = (collections) => {
  return {
    type: ShopActionTypes.SET_COLLECTIONS,
    payload: collections,
  };
};
